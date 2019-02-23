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
import { ExcerciseChartComponent } from './excerciseChart/excerciseChart.component';
import { InspirationsListComponent, IFriendLinkInfo } from './inspirations/inspirations.component';
import { MyGoalsListComponent, IGoal } from './myGoalsList/myGoalsList.component';
import { PostTimelineComponent, IPostItem } from './postTimeline/postTimeline.component';
import { TakePicComponent } from '../takePicComponent/takePic.component';



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
            <ExcerciseChartComponent workoutType={'lunges'} excerciseData={this.dummyData} />
            <InspirationsListComponent friendInfo={this.topFriendInfo} />
            <MyGoalsListComponent goals={this.myGoals} />
            <PostTimelineComponent posts={this.progressPosts} />
          </div>
        </div>
      </>
    );
  }


  dummyData = [
    [Date.UTC(2019, 1, 1), 1],
    [Date.UTC(2019, 1, 2), 5],
    [Date.UTC(2019, 1, 3), 1],
    [Date.UTC(2019, 1, 4), 8],
    [Date.UTC(2019, 1, 5), 16],
    [Date.UTC(2019, 1, 5), 12],
    [Date.UTC(2019, 1, 25), 3],
    [Date.UTC(2019, 1, 26), 14],
    [Date.UTC(2019, 1, 27), 7],
    [Date.UTC(2019, 1, 28), 15]
  ];
  longText = 'blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah';
  topFriendInfo: IFriendLinkInfo[] = [
    { picURL: friendPhoto1, profileLinkURL: '' },
    { picURL: friendPhoto2, profileLinkURL: '' },
    { picURL: friendPhoto3, profileLinkURL: '' },
    { picURL: friendPhoto4, profileLinkURL: '' },
    { picURL: friendPhoto5, profileLinkURL: '' }
  ];
   progressPosts: IPostItem[] = [
    { title: undefined, text: 'test post body text', img: progressPhoto1},
    { title: 'test title', text: undefined, img: progressPhoto2},
    { title: undefined, text: 'test post body text', img: undefined},
    { title: undefined, text: undefined, img: progressPhoto3},
    { title: 'test title', text: undefined, img: undefined},
    { title: undefined, text: 'test post body text', img: undefined},
    { title: undefined, text: 'test post body text', img: progressPhoto4},
    { title: 'testtitle', text: undefined, img: progressPhoto5},
    { title: undefined, text: undefined, img: undefined},
   ];
  // (<>
  //   <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto1} /></div></div>
  //   <div className='post-item-container'><div className='post-item-content'>helloooo</div></div>
  //   <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto2} /></div></div>
  //   <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto3} /></div></div>
  //   <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto4} /></div></div>
  //   <div className='post-item-container'><div className='post-item-content'>{this.longText}</div></div>
  //   <div className='post-item-container'><div className='post-item-content'><img className='bound-img' src={progressPhoto5} /></div></div>
  // </>);
  myGoals: IGoal[] = [
    {isCurrentGoal: true, goalText: 'this is a current goal'},
    {isCurrentGoal: true, goalText: 'this is a current goal'},
    {isCurrentGoal: true, goalText: 'this is a current goal'},
    {isCurrentGoal: true, goalText: 'this is a current goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
    {isCurrentGoal: false, goalText: 'this is a past goal'},
  ];

}