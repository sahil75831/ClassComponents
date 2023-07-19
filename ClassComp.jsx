import React from "react";

class CarParent extends React.Component {
  render() {
    return (
      <>
        <h1> car parent component</h1>
        <i>following is the example of state change in component </i>
        <Car favColor="yellow" />
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
  
  static getDerivedStateFromProps(props, state) {
    return {color: props.favColor, brand:"maruti" };
}

  render() {
      return (
      <>
        <h2>Hi i'm {this.state.brand}</h2>
        model : {this.state.model}
        <br/>color : {this.state.color}
        <br/>year : {this.state.year}
      </>
    );
  }
}
export default CarParent;

    // The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props.
    
    // It takes state as an argument, and returns an object with changes to the state.
    
    // The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:
    
    // note: Lifecycle method should be static: getDerivedStateFromProps