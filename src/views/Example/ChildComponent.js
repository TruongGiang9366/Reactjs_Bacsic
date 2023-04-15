import React from "react";

class ChildComponent extends React.Component {
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
    console.log(">>>> Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    // key: value

    let { name, age } = this.props; // this.props la 1 object
    return (
      <div>
        <div>
          Child Component: {name} - {age}
        </div>
      </div>
    );
  }
}

export default ChildComponent;
