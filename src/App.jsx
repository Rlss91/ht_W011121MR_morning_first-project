import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";
import ProductsPage from "./pages/products/Products.page";
import RegisterPage from "./pages/register/Register.page";
import UsersPage from "./pages/users/Users.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <TestComponent />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ProductsPage /> */}
      <UsersPage />
    </div>
  );
}

export default App;
