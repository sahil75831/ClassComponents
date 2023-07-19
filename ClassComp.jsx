import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "sahil",
      profile: "web developer",
    };
  }
  render() {
    return (
      <>
        <h2>Hi i'm {this.state.name}</h2>
        <i>i am a {this.state.profile}</i>
      </>
    );
  }
}
export default Car;

// If there is a constructor() function in your component, this function will be called when the component gets initiated.The constructor function is where you initiate the component's properties.

// The constructor function is also where you "honor the inheritance of the parent component by including the super() statement" , which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
