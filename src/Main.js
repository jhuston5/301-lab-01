import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

class Main extends React.Component {

  render() {

    let beastsArr = [];

    data.forEach((beasts, idx) => {
      beastsArr.push(
        <HornedBeasts key={idx} title={beasts.title} image_url={beasts.image_url} description={beasts.description} horns={beasts.horns} />
      )
    })
    return (
      <>
        <h2>Main</h2>
        {beastsArr}
      </>
    )
  }

}

export default Main;