import React from "react";
import { CardGroup } from "react-bootstrap";
import HornedBeasts from "./HornedBeasts.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

  
 
 

  render() {
    
    return (
      <>
      <CardGroup>
        {this.props.totalBeasts.map((beast, idx) => {
          return <HornedBeasts
            key={idx}
            beast={beast}
            image_url={beast.image_url} 
            title={beast.title}
            description={beast.description} 
            keyword={beast.keyword} 
            horns={beast.horns}
            displayAsModal={this.props.displayAsModal}
            />        
        })}
        </CardGroup>
      </>
    )
  }
}



export default Main;