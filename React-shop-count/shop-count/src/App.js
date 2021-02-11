import logo from "./logo.svg";
import "./App.css";
import ShopCounter from "./Components/ShopCounter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShopCounter />
      </header>
    </div>
  );
}

export default App;
