import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";
import RegisterPage from "./pages/register/Register.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TestComponent />
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
