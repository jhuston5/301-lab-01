import React from "react";
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./SelectedBeast.js";

class HornedBeasts extends React.Component {
  //Have to add for state:
  constructor(props) {
    super(props);
    //State must be an object {}
    this.state = {
      numberClicked: 0,
      showModal:false
      // isFav: false
    }
  }
  onAdd = () => {
    //how you set state
    console.log('On Add Test');
    this.setState({ numberClicked: this.state.numberClicked + 1 })
    let showModalTwo = false; 
    (this.state.showModal) ? showModalTwo=false : showModalTwo=true;  
    this.setState({showModal:showModalTwo});
  }

  onRemove = () => {
    if (this.state.numberClicked > 0) {
      this.setState({ numberClicked: this.state.numberClicked - 1 });
    }
  }




  render() {
    return (



      <div className="m-2">
        {this.state.showModal ? <SelectedBeast showModal={this.state.showModal} image={this.props.image_url}/> : ''}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.onAdd} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <p> ❤️ {this.state.numberClicked}</p>


            {/* <Button className="m-1" onClick={this.onAdd}>Add</Button>
            <Button variant="danger" className="m-1" onClick={this.onRemove}>Remove</Button> */}
          </Card.Body>
        </Card>
      </div>



    )
  }
}


export default HornedBeasts;