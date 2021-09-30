import React from "react";
import { CardGroup } from "react-bootstrap";
import HornedBeasts from "./HornedBeasts.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

  
  // onSubmit = (event) => {
  //   event.preventDefault();
  // }

  // handleType = (event) => {
  //   this.setState({ userName: event.target.value })
  // }

  handleChange = (event) => {
    console.log('horns selected:', event.target.value);
    // if (beast.horns === event.target.value)
    // {return <HornedBeasts
    //   key={idx}
    //   beast={beast}
    //   image_url={beast.image_url} 
    //   title={beast.title}
    //   description={beast.description} 
    //   keyword={beast.keyword} 
    //   horns={beast.horns}
    //   displayAsModal={this.props.displayAsModal}
    //   />  }    
  }

  render() {
    
    return (
      <>
       <Form id="myForm">
            <Form.Group controlId="yearFrom.ControlSelect">
              <Form.Control as="select" name="horns" onChange={this.handleChange}>
                <option value="">Select Number of Horns</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
            </Form>
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