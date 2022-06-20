import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TestComponent />
      <LoginPage />
    </div>
  );
}

export default App;
