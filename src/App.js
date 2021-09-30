import './App.css';
import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';
import dataJson from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBeasts: dataJson,
      selectedBeast: {},
      // hornBeastSelection: {},
      showModal: false,
      // hornSelection: false
    }
  }

  // displayHornSelection = (horns) => {
    //use filter on dataJson
  //   const hornSelection = dataJson.find(beast => beast.horns === horns);
  //   this.setState({ hornBeastSelection, hornSelection: true });
  // }

  displayAsModal = (name) => {
    const selectedBeast = dataJson.find(beast => beast.title === name);
    this.setState({ selectedBeast, showModal:true});
  }

  handleClose = () => this.setState({ showModal: false });
 
 
  render() {
    return (
    <>
    <Header />
    <Main 
     
      totalBeasts={this.state.totalBeasts}
      displayAsModal={this.displayAsModal}
      displayHornSelection={this.displayHornSelection}  />
      
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
