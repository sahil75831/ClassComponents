import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    let header;
    if (this.state.show) header = <Child />;

    return (
      <>
        {header}
        <br />
        <button onClick={this.delHeader}>delete header</button>
      </>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul
          style={{
            display: "flex",
            padding: "10px",
            listStyle: "none",
            backgroundColor: "crimson",
            gap: "1rem",
            color:"white"
          }}
        >
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    );
  }
}

export default Header;
