import React, { Component } from 'react';
const profilePic = require('../../resources/default-profile-pic.jpg');
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
import { ExerciseChartComponent }  from './exerciseChart/exerciseChart.component';
import { InspirationsListComponent } from './inspirations/inspirations.component';
import { MyGoalsListComponent, IGoal } from './myGoalsList/myGoalsList.component';
import { PostTimelineComponent, IPostItem } from './postTimeline/postTimeline.component';
import { TakePicComponent } from '../takePicComponent/takePic.component';
import { store } from '../../redux/Store';
import { IState, IUser } from '../../redux/interfaces';
import { RouteComponentProps } from 'react-router';
import { appClient } from '../../axios/app.client';



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
interface IProfileComponentState {
  showTakePicModal: boolean;
  photoURL: string;
  viewed: IUser | undefined;
}

export class ProfileComponent extends Component<RouteComponentProps, IProfileComponentState> {

  constructor(props) {
    super(props);
    this.state = {showTakePicModal: false, photoURL: '', viewed: undefined};
  }

  componentDidMount() {
    this.setViewed();
  }
  componentDidUpdate (prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      this.setViewed();
    }
  }

  setViewed = async () => {
    const username = this.props.match.params && (this.props.match.params as any).username;
    console.log(username);
    let viewedUser = store.getState().session.user;
    if (username) {
      const possibleViewed = (await appClient.get(`/users/username/${username}`)).data;
      if (possibleViewed) viewedUser = possibleViewed;
      viewedUser.name = viewedUser.fullName;
    }
    console.log('viewing...');
    console.log(viewedUser);
    this.setState({...this.state, viewed: viewedUser});
  }

  render() {
    let result = <></>;
    if (this.state.viewed)
      result = this.getComponent();
    return result;
  }

  getComponent() {
    const viewed = this.state.viewed as IUser;
    if (!viewed) return <></>;
    const profilePicSrc = viewed.pictureUrl || profilePic;
    return(
      <>
        {/* this holds everything */}
        <div id='all-profile-component'>
          {/* this is the profile and personal info section */}
          <div id='left-side'>
            <div id='sticky'>
              <div id='profile-pic-full'>
                <div id='nickname-label' className='label'><strong>{viewed.name}</strong></div>
                <div id='profile-pic-holder' className='fill-all' style={{position: 'relative'}}>
                  <img id='profile-pic' className='bound-img' src={profilePicSrc}/>
                  <div id='pic-capture-buttons' style={{position: 'absolute', bottom: '1rem', right: '1rem'}}>
                        <button id='take-photo' onClick={() => {this.setState({...this.state, showTakePicModal: true}); }}>Snap Photo</button>
                        <button id='upload-photo' onClick={() => {}}>
                          <label>
                            Custom Upload
                            <input type='file'style={{display: 'none'}}/>
                          </label>
                        </button>
                    </div>
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
            <ExerciseChartComponent viewed={this.state.viewed as IUser}  />
            <InspirationsListComponent viewed={this.state.viewed as IUser} />
            {/* <MyGoalsListComponent goals={this.myGoals} /> */}
            {/* <PostTimelineComponent posts={this.progressPosts} /> */}
          </div>
        </div>
        {(this.state.showTakePicModal) ? <div id='cover-everything'><div id='take-pic-bounding'><TakePicComponent closeModal={this.closeModal} /></div></div> : <></>}
      </>
    );
  }

  closeModal = () => {
    this.setState({...this.state, showTakePicModal: false});
  }
  uploadNewPhotoURL = (newPhotoURL) => {

  }


  dummyData = [
    [2, 7]
  ];
  longText = 'blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah';

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