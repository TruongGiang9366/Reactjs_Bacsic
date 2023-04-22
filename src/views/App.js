import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // thư viện hiển thị thông báo
import Nav from "./Nav/nav";
import Home from "./Example/Home";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

/**
 *  2 components: class components / function components (function, arrow function)
 *  const App = () => {} (day la arrow function)
 *  JSX: code html trong js thi do chinh la JSX
 *  thẻ span cho phép viết trên cùng 1 hàng còn thẻ div là tự động xuống hàng
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
          </Switch>
          <Route path="/about">
            <MyComponents />
          </Route>
        </header>

        <ToastContainer // chức năng hiển thị thông báo
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
    </BrowserRouter>
  );
}

export default App;
