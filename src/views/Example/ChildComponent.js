import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  // xử lý sự kiện khi bấm vào nút show sẽ hiện dữ liệu và ngược lại nút Hide ẩn đi
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  //hàm xóa dữ liệu, lấy dữ liệu từ cha
  handleOnclickDelete = (job) => {
    console.log(">>> handleOnclickDelete: ", job);
    this.props.deleleAJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check conditional: ", check);

    // điều kiện nếu showJobs = false thì sẽ show ra dữ liệu và ngược lại nếu showJobs = true sẽ xóa dữ liệu
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJobs } = props; // this.props la 1 object
//   return (
//     <div>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };
export default ChildComponent;
