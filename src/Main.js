import React from "react";
import HornedBeasts from "./HornedBeasts";

class Main extends React.Component {
  render(){
    return(
      <>
      <HornedBeasts title='manatee' img='test' description='rotund mythical sea creature'/>
      <HornedBeasts title='unicorn' img='test' description='horned mythical creature'/>
      </>
    )
  }
}

export default Main;