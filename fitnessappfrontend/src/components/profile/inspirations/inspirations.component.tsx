import React, { Component } from 'react';
import './inspirations.component.scss';
import $ from 'jquery';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as ExportData from 'highcharts/modules/export-data';
import { Link } from 'react-router-dom';


interface IInspirationsProps {
  friendInfo: IFriendLinkInfo[];
}

export interface IFriendLinkInfo {
  picURL: any; // string;
  profileLinkURL: string;
}

export class InspirationsListComponent extends React.Component<IInspirationsProps, any> {

  render() {

    const inspirationSquares = this.props.friendInfo.map((friendInfo) => { return <Link to={friendInfo.profileLinkURL} ><div className='inspiration-square'><img src={friendInfo.picURL} /></div></Link>; });

    return(
      <>
        <div id='inspirations-full'>
          <div id='inspirations-label'><strong>INSPIRATIONS</strong></div>
          <div id='inspirations-holder'>
            {inspirationSquares}
          </div>
        </div>
      </>
    );
  }
}