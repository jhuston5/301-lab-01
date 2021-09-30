import './App.css';
import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';
import dataJson from './data.json'
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornBeastSelection: dataJson,
      selectedBeast: {},
      showModal: false,
      // hornSelection: false
    }
  }


 
  displayAsModal = (name) => {
    const selectedBeast = dataJson.find(beast => beast.title === name);
    this.setState({ selectedBeast, showModal:true});
  }

  handleClose = () => this.setState({ showModal: false });
 
  handleChange = (event) => {
      let changedBeastArr = dataJson.filter((n) => {
      if(event.target.value === 'all'){
        return n.horns;
    } else {
      return (Number(event.target.value) === n.horns);
    }
    
  });
    this.setState({hornBeastSelection : changedBeastArr}) 

  }


  render() {
    return (
    <>
    
    <Header />
    <Form id="myForm">
          <Form.Group controlId="hornFrom.ControlSelect">
            <Form.Control as="select" name="horns" onChange={this.handleChange}>
              <option value="all">Select Number of Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
          </Form>
    <Main 
     
      hornBeastSelection={this.state.hornBeastSelection}
      displayAsModal={this.displayAsModal}
      />
      
    
    <Footer />
    <SelectedBeast 
    selectedBeast={this.state.selectedBeast}
    showModal={this.state.showModal}
    handleClose={this.handleClose}
    />
    </>
    
    );
  }
}

export default App;
