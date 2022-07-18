import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/navbar.component";
// import CreateBizCardPage from "./pages/createBizCard/CreateBizCard.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
// import TkUseEffectsPage from "./pages/tkUseEffects/tkUseEffects.page";
// import FirstAjaxPage from "./pages/firstAjax/firstAjaxPage";
// import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";
// import ReduxCounterPage from "./pages/TK_redux_counter/reduxCounter.page";
// import ReduxCounterDisplayPage from "./pages/TK_redux_counter/reduxCounterDisplay.page";
import RegisterPage from "./pages/register/Register.page";
import HomePage from "./pages/homepage/home.page";
import NotFoundPage from "./pages/nofoundpage/notfound.page";
import LogoutPage from "./pages/logout/logout.page";
// import ProductsPage from "./pages/products/Products.page";
// import UsersPage from "./pages/users/Users.page";
// import DefenetlyRealAmazonPage from "./pages/defenetlyRealAmazon/defenetlyRealAmazon.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
