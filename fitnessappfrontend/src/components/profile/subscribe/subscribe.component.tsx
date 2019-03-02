import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IUser, IState } from '../../../redux/interfaces';
const defaultProfilePic = require('../../../resources/default-profile-pic.jpg');
import { appClient } from '../../../axios/app.client';
import { connect } from 'react-redux';

interface ISubscribeProps {
  viewed: IUser;
  viewer: IUser;
}

interface ISubscribeState {
  Subscribed: boolean;
}

export class SubscribeComponent extends React.Component<ISubscribeProps, ISubscribeState> {

    constructor(props) {
        super(props);
        let includedSub = false;
        if (
            this.props.viewer.followedUsers === undefined ||
            this.props.viewer.followedUsers.length < 1
        ) {
            includedSub = false;
        } else {
            includedSub = false;
            this.props.viewer.followedUsers.forEach(sub => {
                if (sub.id === this.props.viewed.id) {
                    includedSub = true;
                }
            });
        }

        this.state = {
            Subscribed: includedSub,
        };
    }

  render() {
    let result = <></>;
    if (this.props.viewed)
      result = this.getComponent();
    return result;
  }

  async unsubscribe() {
    await appClient.patch(`/users/unsubscribe/${this.props.viewer.username}/${this.props.viewed.username}`);
  }

  async subscribe() {
    await appClient.patch(`/users/subscribe/${this.props.viewer.username}/${this.props.viewed.username}`);
  }

  getComponent() {
    console.log('---------------------subs----------------------');
    console.log(this.props.viewer);
    console.log(this.props.viewed);
    console.log(this.state.Subscribed);
    console.log('---------------------subs----------------------');
    if (this.state.Subscribed) {
        return(
            <div id='subscription'>
            <button
                onClick={ () => { setTimeout(() => {this.unsubscribe(); }); }}
                id='Unsubscribe'
            >
                Unsubscribe from {this.props.viewed.name}
            </button>
            </div>
        );
    } else {
        return(
            <div id='subscription'>
                <button
                    onClick={ () => { setTimeout(() => {this.subscribe(); }); }}
                    id='Subscribe'
                >
                    Subscribe to {this.props.viewed.name}
                </button>
            </div>
        );
    }
  }
}

const mapStateToProps = (state: IState) => {
    return {
        viewer: state.session.user
    };
};

export default connect(mapStateToProps)(SubscribeComponent);