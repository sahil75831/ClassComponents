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
      year: 1964,
    };
}
// note: Lifecycle method should be static: getDerivedStateFromProps
// static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps")
//     return { color: props.favColor, brand: "maruti" };
//   }

  componentDidMount(){
    // note : don't use getDerivedStateFromProps otherwise it wont show any change because as soon componentdidmount fires state change due to which component re-renders and picks up the state from getDerivedStateFromProps
    setTimeout(() => this.setState({color: "purple"}), 2000)
    console.log("after getDerivedStateFromProps")
  }
  render() {
    return (
      <>
        <h2>Hi i'm {this.state.brand}</h2>
        model : {this.state.model}
        <br />
        color : {this.state.color}
        <br />
        year : {this.state.year}
      </>
    );
  }
}
export default CarParent;