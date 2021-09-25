import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './App.css';

class SelectedBeast extends React.Component {

  
  render() {
    return(
    <div>
       <Modal show={this.props.showModal} >
        <Modal.Header >
          <Modal.Title>Selected Beast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image} alt={this.props.title}></img></Modal.Body>
          <p>{this.props.description}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.showModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

  export default SelectedBeast;



  // <Modal show={this.state.showModal} onHide={this.toggleModal}>