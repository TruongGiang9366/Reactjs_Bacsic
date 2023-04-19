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

  // add dữ liệu từ input lên màn hình
  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job], // dấu ... là toán tử copy, copy các phần tử của array và tạo các phần tử khác
      // arrJobs: currentJobs,
    });
  };

  deleleAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    console.log(">>>> Call Render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleleAJob={this.deleleAJob}
        />
      </>
    );
  }
}

export default MyComponents;
