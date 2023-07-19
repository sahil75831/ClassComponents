import React from "react";

class CarParent extends React.Component {
  render() {
    return (
      <>
        <h1> car parent component</h1>
        <i>following is the example of state change in component </i>
        <Car />
      </>
    );
  }
}


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
    };
  }

//  To change a value in the state object, use the this.setState() method.
// When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

  handleClick = () => {
    this.setState({color:"blue", year:this.state.year+1 })
  }

  render() {
    return (
      <>
        <h2>Hi i'm {this.state.brand}</h2>
        model : {this.state.model}
        <br/>color : {this.state.color}
        <br/>year : {this.state.year}
        <br/><button onClick={this.handleClick}>change color</button>
      </>
    );
  }
}
export default CarParent;
