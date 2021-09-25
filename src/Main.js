import React from "react";
import HornedBeasts from "./HornedBeasts.js";
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component {

  render() {
    let beastsArr = this.props.data.map((beasts, idx) => {
      return <HornedBeasts 
      key={idx} 
      title={beasts.title} 
      image_url={beasts.image_url}
      description={beasts.description}
      horns={beasts.horns}
      toggleModal={this.props.toggleModal} />
    })
    return (
      <>
        <CardGroup>
          {beastsArr}
        </CardGroup>
        
      </>
    )
  }

}

export default Main;