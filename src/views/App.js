import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";

/**
 *  2 components: class components / function components (function, arrow function)
 *  const App = () => {} (day la arrow function)
 *  JSX: code html trong js thi do chinh la JSX
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello word React.js (Alex Dev)</p>
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
