import { ToastContainer } from "react-toastify";

import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import CreateBizCardPage from "./pages/createBizCard/CreateBizCard.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
// import TkUseEffectsPage from "./pages/tkUseEffects/tkUseEffects.page";
// import FirstAjaxPage from "./pages/firstAjax/firstAjaxPage";
// import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";
import ReduxCounterPage from "./pages/TK_redux_counter/reduxCounter.page";
import ReduxCounterDisplayPage from "./pages/TK_redux_counter/reduxCounterDisplay.page";
// import RegisterPage from "./pages/register/Register.page";
// import ProductsPage from "./pages/products/Products.page";
// import UsersPage from "./pages/users/Users.page";
// import DefenetlyRealAmazonPage from "./pages/defenetlyRealAmazon/defenetlyRealAmazon.page";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      {/* <TestComponent /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ProductsPage /> */}
      {/* <UsersPage /> */}
      {/* <DefenetlyRealAmazonPage /> */}
      {/* <FirstAjaxPage /> */}
      {/* <CreateBizCardPage /> */}
      {/* <DashboardPage /> */}
      {/* <TkUseEffectsPage /> */}
      <div className="row">
        <div className="col">
          <ReduxCounterPage />
        </div>
        <div className="col">
          <ReduxCounterDisplayPage />
        </div>
      </div>
    </div>
  );
}

export default App;
