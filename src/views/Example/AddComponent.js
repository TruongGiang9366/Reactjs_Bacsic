import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  // xử lý event nhập dữ liệu vào
  handleChangTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  // xử lý event nhập dữ liệu vào
  handleChangSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  // xử lý event cho nút Submit
  handleSubmit = (event) => {
    event.preventDefault();
    // đặt điều kiện nếu input trống sẽ hiện ra thông báo
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">> check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      // tạo form
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangTitleJob(event)} // xử lý có thể nhập dữ liệu vào input
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangSalary(event)}
        />
        
        <br />
        <br />
        <input type="Submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}

export default AddComponent;
