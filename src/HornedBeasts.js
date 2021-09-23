import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  //Have to add for state:
  constructor(props) {
    super(props);
    //State must be an object {}
    this.state = {
      numberClicked: 0,
      // isFav: false
    }
  }
  onAdd = () => {
    //how you set state
    this.setState({ numberClicked: this.state.numberClicked + 1 });
  }
  onRemove = () => {
    if (this.state.numberClicked > 0) {
      this.setState({ numberClicked: this.state.numberClicked - 1 });
    }
  }


  render() {
    return (



      <div className="m-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.onAdd}/>
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