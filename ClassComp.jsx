import React from "react";

class CarParent extends React.Component {
  render() {
    return (
      <>
        <h1> car parent component</h1>
        <i>following is the example of props in component is the</i>
        <Car role="frontend" />
      </>
    );
  }
}

// If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sahil",
      profile: "web developer",
    };
  }
  render() {
    return (
      <>
        <h2>Hi i'm {this.state.name}</h2>
        <i>i am a {this.props.role} {this.state.profile}</i>
      </>
    );
  }
}
export default CarParent;

// If there is a constructor() function in your component, this function will be called when the component gets initiated.The constructor function is where you initiate the component's properties.

// The constructor function is also where you "honor the inheritance of the parent component by including the super() statement" , which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).


// OUTPUT
// car parent component
// following is the example of props in component is the
// Hi i'm sahil
// i am a frontend web developer