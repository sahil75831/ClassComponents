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

changeColor(str){
    this.setState({color:str})
}
componentDidMount(){
    setTimeout(()=>this.setState({color:"burgandy"}) , 2000)
}
getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById("div1").innerHTML = prevState.color
}

componentDidUpdate(){
    document.getElementById("div2").innerHTML = this.state.color
}
  render() {
    return (
      <>
        <h2>Hi i'm {this.state.brand}</h2>
        model : {this.state.model}
        <br />color : {this.state.color}
        <br/>year : {this.state.year}
        <br /><button onClick={()=>this.changeColor("magenta")}>change color</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}
export default CarParent;