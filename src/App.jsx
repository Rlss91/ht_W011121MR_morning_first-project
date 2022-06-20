import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/Test.component";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TestComponent />
    </div>
  );
}

export default App;
