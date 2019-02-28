import React, { Component } from 'react';

export class TakePicComponent extends React.Component<any, any> {

    video: React.RefObject<HTMLVideoElement>;
    canvas: React.RefObject<HTMLCanvasElement>;
    constraints = { audio: false, video: { width: 1280, height: 720 } };

    constructor(props) {
        super(props);
        this.video = React.createRef();
        this.canvas = React.createRef();
        this.state = {
            data: undefined
        };
    }


    componentDidMount() {
        setTimeout(
            async () => {
                const mStream =  await navigator.mediaDevices.getUserMedia(this.constraints)
                .catch(function(err) { console.log(err.name + ': ' + err.message); }) as MediaStream;
                if (this.video.current) this.video.current.srcObject = mStream;
            },
        0);
    }

    componentWillUnmount() {
        this.exitPicMode();
    }

    takePic = () => {
        const video = this.video.current;
        const canvas = this.canvas.current;

        if (canvas && video) {
            const prevWidth = video.width,
                prevHeight = video.height,
                prevDisplay = video.style.display;


            video.pause();

            video.width = 1280;
            video.height = 720;
            canvas.width = video.width;
            canvas.height = video.height;
            video.style.display = 'block';

            const context = canvas.getContext('2d') as CanvasRenderingContext2D;
            const sw = video.width, // source width
                sh = video.height, // source height
                dw = canvas.width, // destination width
                dh = canvas.height; // destination height
            context.drawImage(video, 0, 0, sw, sh, 0, 0, dw, dh);
            const fullQualityURI = canvas.toDataURL('image/jpeg', 1.0);
                  
            fetch(fullQualityURI)
            .then(res => res.blob())
            .then(blob => {      
                //var objectURL = URL.createObjectURL(blob);
                //myImage.src = objectURL;
                const res = this.uploadImageToImgur(blob);
                return res;
            } ).then((data) => {        
                console.log('imgurUploadResponse');
                console.log(data);
                this.setState({ data: `https://imgur.com/${data.data.id}` });
            })

            video.width = prevWidth;
            video.height = prevHeight;
            video.style.display = prevDisplay;
        }
    }

    exitPicMode = () => {
        const video = this.video.current;
        if (video) {
            video.pause();
            const stream = video.srcObject as MediaStream;
            const tracks = stream.getTracks();
            tracks.forEach(function(track) {
                track.stop();
            });
            // tslint:disable-next-line:no-null-keyword
            video.srcObject = null;
        }
    }

    resetPic = () => {
        const video = this.video.current;
        if (video) {
            video.play();
        }
    }

    render() {
        return (
            <>
                <div id='take-pic-holder' className='fill-all' style={{position: 'relative'}}>
                    <div id='pic-capture-preview' className='fill-all' style={{position: 'relative'}}>
                        <video className='fill-all' style={{display: '', backgroundColor: 'black' }}  id='snapshot-preview' ref={this.video}  onLoadedMetadata={(e) => {e.currentTarget.play(); }} autoPlay={true} >
                            error
                        </video>
                    </div>
                    <div id='pic-capture-buttons' style={{position: 'absolute', top: '1rem', left: '1rem'}}>
                        <button id='snap' onClick={this.takePic}>Snap Photo</button>
                        <button onClick={this.resetPic}> reset </button>
                        <button onClick={this.exitPicMode}> close </button>
                        <a id='download-photo' href={ this.state.data } download>download photo</a>
                    </div>
                    <canvas ref={this.canvas} id='canvas' width='1280' height='720'  style={{display: 'none', position: 'fixed' }}>waiting on permissions...</canvas>
                </div>
            </>
        );
    }

    // https://codepen.io/spiralx/pen/mJxWJE
    uploadImageToImgur = (blob) => {
        var formData = new FormData()
        formData.append('type', 'file')
        formData.append('image', blob)
      
        return fetch('https://api.imgur.com/3/upload.json', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: 'Client-ID f067429fa2a38b7'// imgur specific
          },
          body: formData
        })
          .then(this.processStatus) 
          .then(this.parseJson)
    }    
      
    parseJson(response) {
        return response.json()
    }


    processStatus(response) {
        if (response.status === 200 || response.status === 0) {
          return Promise.resolve(response)
        } 
        else {
          return Promise.reject(new Error(`Error loading url`))
        }
      }
}
