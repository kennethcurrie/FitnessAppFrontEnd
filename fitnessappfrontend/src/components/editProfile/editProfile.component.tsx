import React, { Component } from 'react';
import { IState, ISession } from '../../redux/interfaces';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/sign-up.action';
import { ISignupComponentProps } from '../signUp/signUp.component';

interface IEditProfileProps extends ISignupComponentProps {
    session: ISession;
}

export class EditProfileComponent extends Component<IEditProfileProps, any> {
  render() {
    return (
        <h1>{this.props.session.user}</h1>
    );
  }
}

const mapStateToProps = (state: IState) => {
    return {
        session: state.session
    };
};
const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);
