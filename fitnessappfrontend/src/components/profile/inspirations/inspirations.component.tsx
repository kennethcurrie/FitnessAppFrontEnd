import React, { Component } from 'react';
import './inspirations.component.scss';
import $ from 'jquery';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as ExportData from 'highcharts/modules/export-data';
import { Link } from 'react-router-dom';
const friendPhoto1 = require('../../../resources/placeholder-friend-photo-1.jpg');


interface IInspirationsProps {
  friendInfo: IFriendLinkInfo[];
}

export interface IFriendLinkInfo {
  picURL: any; // string;
  profileLinkURL: string;
}

export class InspirationsListComponent extends React.Component<IInspirationsProps, any> {

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

    const friendArr = this.state.displaySearch ? this.topSearchDummy : this.props.friendInfo;

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
            <strong>INSPIRATIONS</strong>
            <span id='inspirations-search'>
                <span><strong>Search: </strong></span>
                <input onChange={this.updateSquares} type='text' />
            </span>
          </div>
          <div id='inspirations-holder'>
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
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto1, profileLinkURL: '' }
  ];



}



