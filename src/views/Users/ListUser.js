import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  //cau lenh lay du lieu goi API
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {" "}
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListUser;
