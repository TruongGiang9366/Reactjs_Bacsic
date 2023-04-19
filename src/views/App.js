import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // thư viện hiển thị thông báo

/**
 *  2 components: class components / function components (function, arrow function)
 *  const App = () => {} (day la arrow function)
 *  JSX: code html trong js thi do chinh la JSX
 *  thẻ span cho phép viết trên cùng 1 hàng còn thẻ div là tự động xuống hàng
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO Apps React.js (Alex Nguyễn Dev)</p>
        {/* <MyComponents /> */}
        <ListTodo />
      </header>

      // chức năng hiển thị thông báo
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
