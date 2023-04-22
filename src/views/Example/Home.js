import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  // HOC: higher order component
  render() {
    console.log(">>> check props: ", this.props);
    return <div>Hello world from HomePage with Alex Nguyễn</div>;
  }
}

export default withRouter(Home);
