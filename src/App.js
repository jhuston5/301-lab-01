import './App.css';
import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import dataJson from './data.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: dataJson
    }
  }

 
  render() {
    return (
    <>
    <Header />
    <Main 
      toggleModal={this.toggleModal}
      data={this.state.data}  />

    <Footer />
    </>
    
    );
  }
}

export default App;
