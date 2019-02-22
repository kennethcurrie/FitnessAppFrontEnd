import React, { Component } from 'react';
import Modal from 'react-modal';


export class DeleteProfileComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id='delete'>
        <h1>Delete Profile Component!</h1>
        <p>Deleting your profile is permanent and irrevocable. All data will be lost.</p>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='Example Modal'
        >
          <h2 className='warning'>Warning</h2>
          <p>Are you sure?</p>
          <p>&nbsp;</p>
          <button onClick={this.closeModal}>Take Me Back</button><button onClick={this.closeModal}>Delete Profile</button>
        </Modal>
      </div>
    );
  }
}