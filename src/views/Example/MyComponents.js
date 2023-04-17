import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponents extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "800" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "Project Managers", salary: "1500" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // this.setState({
    //   arrJobs: this.arrJobs.push(job),
    // });
  };

  render() {
    console.log(">>>> Call Render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponents;
