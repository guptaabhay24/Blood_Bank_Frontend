import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPanel from "./component/AdminDashboard/AdminPanel/AdminPanel";
import ContactUs from "./component/ContactUs/ContactUs";
import HomeDonor from "./component/HomeDonor/HomeDonor";
import HomeMain from "./component/HomeMain/HomeMain/HomeMain";
import Login from "./component/Login/Login/Login";
import Register from "./component/Login/Register/Register";
import NotFound from "./component/Shared/NotFound/NotFound";
import Footer from "./component/Shared/Footer/Footer";
import NavBar from "./component/Shared/NavBar/NavBar";
import UserDashboard from "./component/UserDashboard/UserDashboard/UserDashboard";
import UserDonateBlood from "./component/UserDashboard/UserDonateBlood/UserDonateBlood";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
// import Payment from "./component/DashBoard/Payment/Payment";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./component/Login/AdminRoute/AdminRoute";
import UserBloodRequest from "./component/UserDashboard/UserBloodRequest/UserBloodRequest";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeMain />
            </Route>
            <Route path="/home">
              <HomeMain />
            </Route>
            {/* <Route path="/payment">
              <Payment />
            </Route> */}
            <Route path="/donor">
              <HomeDonor />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <AdminRoute path="/admindashboard">
              <AdminPanel />
            </AdminRoute>
            <PrivateRoute path="/be-a-donar">
              <UserDonateBlood />
            </PrivateRoute>
            <PrivateRoute path="/userdashboard">
              <UserDashboard />
            </PrivateRoute>
            <PrivateRoute path="/user-blood-request">
              <UserBloodRequest />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
