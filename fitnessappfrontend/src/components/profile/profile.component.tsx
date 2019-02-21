import React, { Component } from 'react';
import './profile.component.scss';
const profilePic = require('../../resources/placeholder-profile-pic.jpg');
const progressPhoto1 = require('../../resources/placeholder-progress-photo-1.jpg');
const progressPhoto2 = require('../../resources/placeholder-progress-photo-2.jpg');
const progressPhoto3 = require('../../resources/placeholder-progress-photo-3.jpg');
const progressPhoto4 = require('../../resources/placeholder-progress-photo-4.jpg');
const progressPhoto5 = require('../../resources/placeholder-progress-photo-5.jpg');
const friendPhoto1 = require('../../resources/placeholder-friend-photo-1.jpg');
const friendPhoto2 = require('../../resources/placeholder-friend-photo-2.jpg');
const friendPhoto3 = require('../../resources/placeholder-friend-photo-3.jpg');
const friendPhoto4 = require('../../resources/placeholder-friend-photo-4.jpg');
const friendPhoto5 = require('../../resources/placeholder-friend-photo-5.jpg');
import $ from 'jquery';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as ExportData from 'highcharts/modules/export-data';



/*
A profile is the home page for the average user.
The profile gives an overview of ...
  -*a profile picture
  -*basic info/stats
  -*a short about me (goals)
  -last 3 excersises
  -a section to add a new excersise to history
  -top 3 friends
  -show a graph displaying ratios of types of excersise, with lables

*/

export class ProfileComponent extends React.Component<any, any> {


  componentDidMount() {
    const hc = this.updateChart(this.dummyData, 'lunges');
    // push to end of stack so chart is done with its render before trying to reflow it
    setTimeout(() => hc.reflow(), 0);
  }

updateChart = (data, workoutType: string, ): Highcharts.Chart => {

  const textStyle = {
    style: {
      fontFamily: 'monospace',
      color: 'rgba(225, 255, 255, 1)'
    }
  };
  return Highcharts.chart( {
    chart: {
      renderTo: 'history-graph',
      zoomType: 'x',
      ...textStyle,
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
            [0, 'rgba(100, 25, 255, .0)'],
            [1, 'rgba(200, 200, 255, .0)']
        ]
      }
    },
    title: {
      text: workoutType + ' History',
      ...textStyle
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
      ...textStyle
    },
    xAxis: {
      type: 'datetime',
      labels: {...textStyle}
    },
    yAxis: {
      title: {
        text: 'score',
      ...textStyle,
      },
      labels: {...textStyle}
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(100, 25, 255, .9)'],
            [1, 'rgba(127, 255, 212, .6)']
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        }
      }
    },

    series: [{
      type: 'area',
      name: workoutType + ' score',
      data: data
    }]
  });
}



  render() {
    return(
      <>
        {/* this holds everything */}
        <div id='all-profile-component'>
          {/* this is the profile and personal info section */}
          <div id='left-side'>
            <div id='sticky'>
              <div id='profile-pic-full'>
                <div id='nickname-label' className='label'><strong>Nickname</strong></div>
                <div id='profile-pic-holder'>
                  <img id='profile-pic' className='bound-img' src={profilePic}/>
                </div>
              </div>
              <div id='stats-full'>
                <div id='stats-label' className='label'><strong>Stats</strong></div>
                <div id='stats-holder'>
                  instagram: blah <br />
                  twitter: blah <br />
                  facebook: blah <br />
                  countrymatch: blah
                </div>
              </div>
            </div>
          </div>
          <div id='right-side'>
            <div id='history-full'>
              <div id='history-label'><strong>MY PROGRESS</strong></div>
              <div id='history-holder'>
                <div className='bound-img'><div id='history-graph'></div></div>
              </div>
            </div>
            <div id='inspirations-full'>
              <div id='inspirations-label'><strong>INSPIRATIONS</strong></div>
              <div id='inspirations-holder'>
                {this.inspirationSquares}
              </div>
            </div>
            <div id='my-goals-full'>
              <div id='my-goals-label'><strong>MY GOALS</strong></div>
              <div id='my-goals-holder'>
                <div className='goal-item'>
                  <input id='new-goal-input' placeholder='add a new goal' />
                </div>
                  {this.goalItems}
              </div>
            </div>
            <div id='posts-full'>
              <div id='posts-label'><strong>progress photos/videos (maybe doesnt need a label)</strong></div>
              <div id='posts-holder'>
                {this.progressPosts}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


  dummyData = [[0, 1], [1, 5], [2, 1], [3, 8], [5, 16], [16, 12], [25, 3], [26, 14], [39, 7], [40, 15]];
  longText = 'blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah';
  inspirationSquares = (<>
    <div className='inspiration-square'><img src={friendPhoto1} /></div>
    <div className='inspiration-square'><img src={friendPhoto2} /></div>
    <div className='inspiration-square'><img src={friendPhoto3} /></div>
    <div className='inspiration-square'><img src={friendPhoto4} /></div>
    <div className='inspiration-square'><img src={friendPhoto5} /></div>
  </>);
  progressPosts = (<>
    <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto1} /></div></div>
    <div className='post-item-container'><div className='post-item-content'>helloooo</div></div>
    <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto2} /></div></div>
    <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto3} /></div></div>
    <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto4} /></div></div>
    <div className='post-item-container'><div className='post-item-content'>{this.longText}</div></div>
    <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto5} /></div></div>
  </>);
  goalItems = (<>
    <div className='goal-item goal-item-current'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a current goal</span>
    </div>
    <div className='goal-item goal-item-current'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a current goal</span>
    </div>
    <div className='goal-item goal-item-current'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a current goal</span>
    </div>
    <div className='goal-item goal-item-current'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a current goal</span>
    </div>


    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
    <div className='goal-item goal-item-past'>
      <span className='goal-item-label'>GOAL: </span>
      <span className='goal-item-text'>this is a past goal</span>
    </div>
  </>);

}