import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const friendPhoto1 = require('../../resources/placeholder-friend-photo-1.jpg');

// interface IInspirationsProps {
//     friendInfo: IFriendLinkInfo[];
//   }

  export interface IFriendLinkInfo {
    picURL: any; // string;
    profileLinkURL: string;
  }


export class RankProfilesComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            displaySearch: false
        };
    }

    updateSquares = () => {
        this.setState({
            displaySearch: !this.state.displaySearch
        });
    }


  render() {
    const friendArr = this.topSearchDummy;

    const inspirationSquares = friendArr.map((friendInfo, id) => {
        return <Link key={id} to={friendInfo.profileLinkURL} >
                <div className='inspiration-square'>
                    <img src={friendInfo.picURL} />
                </div>
               </Link>;
        });

    return(
      <>
        <div id='inspirations-full'>
          <div id='inspirations-label'>
            <strong>
                <label>Top Ranked By</label>
                <br/>
                <select defaultValue='rank' name='searchBy' id='searchBy'>
                    <option value='rank'>Followers</option>
                    <option value='running'>Running</option>
                    <option value='biking'>Biking</option>
                    <option value='swimming'>Swimming</option>
                    <option value='curl'>Curls</option>
                    <option value='bench-press'>Bench-Press</option>
                    <option value='deadlift'>Deadlift</option>
                    <option value='pushup'>Push-Up</option>
                    <option value='squat'>Squat</option>
                    <option value='situp'>Sit-Up</option>
                    <option value='pullup'>Pull-Up</option>
                </select>
            </strong>
          </div>
          <div id='inspirations-rank-holder' style={{'width': '100%', 'height': '100%'}}>
            {inspirationSquares}
          </div>
        </div>
      </>
    );
  }

  topSearchDummy: IFriendLinkInfo[] = [
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' }
  ];



}


