import React from "react";
import { toast } from "react-toastify"; // thư viện hiển thị thông báo
class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handelAddTodo = () => {
    if (!this.state.title) {
      toast.error(`Missing Title's Todo!!`);
      return;
      //if ( undefined/null/empty ) => false
    }
    let todo = {
      // floor la ham lam tron
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };

    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handelAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
