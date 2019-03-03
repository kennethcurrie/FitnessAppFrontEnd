import React, { Component } from 'react';
import Modal from 'react-modal';
import { IState, IUser } from '../../redux/interfaces';
import * as actions from '../../redux/actions/delete-modal.actions';
import { connect } from 'react-redux';

interface IProps {
  username: string;
  active: boolean;
  open: () => void;
  onOpen?: () => void;
  close: () => void;
  onConfirm: (username: string) => void;
}

const style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  content: {
    backgroundColor: 'black',
    width: '500px',
    height: '250px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-250px'
  }
};

class DeleteProfileComponent extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, active, open, close, onConfirm } = this.props;
    return (
      <div id='delete'>
        <button onClick={e => { e.preventDefault(); open(); }}>Delete</button>
        <Modal
          ariaHideApp={false}
          style={style}
          isOpen={active}
          onRequestClose={close}
        >
          <h2 style={{ textAlign: 'center', color: 'red' }} className='warning'>Warning</h2>
          <p style={{ textAlign: 'center' }}>Are you sure you want to delete your Profile?</p>
          <p style={{ textAlign: 'center' }}>THIS CANNOT BE UNDONE</p>
          <p>&nbsp;</p>
          <button onClick={e => {
            close();
          }}>NO</button>
          <button onClick={e => {
            e.preventDefault(); onConfirm(username);
          }}>YES</button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    active: state.deleteModal.active,
    username: state.session.user.username
  };
};

const mapDispatchToProps = {
  open: actions.open,
  close: actions.close,
  onConfirm: actions.onConfirm
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfileComponent);