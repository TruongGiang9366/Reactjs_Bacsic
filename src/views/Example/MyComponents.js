import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };

  render() {
    console.log(">>>> Call Render: ", this.state);
    return (
      <div>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangLastName(event)}
          />
          <br />
          <br />
          <input type="Submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
        <ChildComponent name={"Alan"} age={"23"} />
      </div>
    );
  }
}

export default MyComponents;
