import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify"; // thư viện hiển thị thông báo
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  // add ds todo
  state = {
    listTodos: [
      { id: "todo1", title: " Doing Homework" },
      { id: "todo2", title: " Making videos" },
      { id: "todo3", title: " Fixing bugs" },
    ],
    editTodo: {},
  };

  // add todo moi
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow Success!"); // hàm thông báo
  };

  //hàm xóa dữ liệu theo id của dữ liệu
  // hàm map chỉ trả ra 1 dữ liệu
  // hàm filter là hàm lọc dữ liệu
  handelDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete Success!"); // hàm thông báo
  };

  handelEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save: chỉnh sửa input và lưu lại
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      //Find index of specific object using findIndex method.
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update Todo Success!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handelOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0; // điều kiện so sánh nếu Object bằng 0 thì isEmptyObj trả ra bằng true, ngược lại bằng false
    console.log(">>> check EmtyObj: ", isEmptyObj);
    // let lisTodos = this.state.listTodos;

    return (
      <>
        <p>Simple TODO Apps React.js (Alex Nguyễn Dev)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {
              // Hiển thị thông tin từ listTodos
              listTodos &&
                listTodos.length > 0 &&
                listTodos.map((item, index) => {
                  return (
                    <div className="todo-child" key={item.id}>
                      {isEmptyObj === true ? ( // tạo điều kiện nếu bấm vào nút edit sẽ hiện ra nút input
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : (
                        // nếu chưa bấm nút edit thì chạy hàm trên và ngược lại
                        // check xem obj co rong hay khong
                        // check xem id co giong hay khong
                        <>
                          {editTodo.id === item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                value={editTodo.title}
                                onChange={(event) =>
                                  this.handelOnchangeEditTodo(event)
                                }
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title}
                            </span>
                          )}
                        </>
                      )}
                      <button
                        className="edit"
                        onClick={() => this.handelEditTodo(item)}
                      >
                        {isEmptyObj === false && editTodo.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button
                        className="del"
                        onClick={() => this.handelDeleteTodo(item)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })
            }
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
