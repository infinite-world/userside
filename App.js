import React from "react";
import "./App.css";
import "./style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Admin from "./components/admin/Admin";
import UserTable from "./components/admin/usertable/UserTable";
import AdminLogin from "./components/admin/admin-login/AdminLogin";
import Userside from "./components/userside/Userside";
import Userprofile from "./components/userside/userprofile/Userprofile";
import UserInfoTabel from "./components/userside/usertabel/UserInfoTabel";
import UserBookingTabel from "./components/userside/userBookingTabel/BookingTabel";
import CustomersTabel from "./components/userside/customersTabel/CustomersTabel";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/usertable" component={UserTable} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/userside" component={Userside} />
        <Route path="/userprofile" component={Userprofile} />
        <Route path="/userinfotabel" component={UserInfoTabel} />
        <Route path="/userbookingtable" component={UserBookingTabel} />
        <Route path="/customerstabel" component={CustomersTabel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
