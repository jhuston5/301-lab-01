import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './App.css';

class SelectedBeast extends React.Component {

  
  render() {
    console.log('Selected beast props:', this.props)
    return(

    <div>
       <Modal show={this.props.showModal} onHide={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selectedBeast.image_url} style={{width:'20rem'}} alt={this.props.title}></img>
          <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

  export default SelectedBeast;



  // <Modal show={this.state.showModal} onHide={this.toggleModal}>