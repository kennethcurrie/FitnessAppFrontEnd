import React, { Component } from 'react';

export class TakePicComponent extends React.Component<any, any> {

    video: React.RefObject<HTMLVideoElement>;
    canvas: React.RefObject<HTMLCanvasElement>;
    constraints = { audio: false, video: { width: 1280, height: 720 } };

    constructor(props) {
        super(props);
        this.video = React.createRef();
        this.canvas = React.createRef();
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

    render() {
        return (
            <>
                <div>
                    <video id='snapshot-preview'  ref={this.video}  onLoadedMetadata={(e) => {e.currentTarget.play(); }} width='1280' height='720' autoPlay={true} style={{backgroundColor: 'black'}}>
                        error
                    </video>
                    <button id='snap'>Snap Photo</button>
                    <button> reset </button>
                    <canvas ref={this.canvas} id='canvas' style={{display: 'none', width: 1280, height: 720 }}>waiting on permissions...</canvas>
                </div>
            </>
        );
    }
}
