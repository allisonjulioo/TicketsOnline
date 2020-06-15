import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// site
import Home from "@/pages/Site/Home";
import Session from "@/pages/Site/Session";
import ChoosePlace from "@/pages/Site/ChoosePlace";
import Checkout from "../pages/Site/Checkout";
import Tickets from "../pages/Site/Tickets";

// auth
import AuthLogin from "@/pages/Auth/Login";
import AuthRegister from "@/pages/Auth/Register";

// admin
import Dashboard from "../pages/Admin/Dashboard";
import NewMovie from "../pages/Admin/NewMovie";
import NewTransaction from "../pages/Admin/NewTransaction";

const Routes = ({ history }) => {
  const dispatch = useDispatch();
  setHomeRouter(history);
  // eslint-disable-next-line
  useEffect(() => history.listen((e) => setHomeRouter(e)), [history]);
  function setHomeRouter(e) {
    if (e && e.location && e.location.pathname) {
      const urlArr = e.location.pathname.split("/");
      document.body.classList = "";
      if (urlArr[urlArr.length - 1]) {
        document.body.classList.add(urlArr[urlArr.length - 1] || "");
      }
      const admin = urlArr.includes("admin");
      if (admin) {
        document.body.classList.add("admin");
      }
      dispatch(setAdminMode(admin));
    }
  }
  return (
    <Switch>
      <Route path="/main" component={Home} />
      <Route path="/movie/:id" exact component={Session} />
      <Route path="/movie/:id/place" component={ChoosePlace} />
      <Route path="/movie/:id/checkout" component={Checkout} />
      <Route path="/movie/:id/ticket" component={Tickets} />
      <Route path="/auth/register" component={AuthRegister} />
      <Route path="/auth/login" component={AuthLogin} />
      <Route path="/admin/movie/new" component={NewMovie} />
      <Route path="/admin/transaction/new" component={NewTransaction} />
      <Route path="/admin/dashboard" component={Dashboard} />
      <Redirect from="*" to="/main" />
    </Switch>
  );
};
const setAdminMode = (isAdmin) => {
  return { type: "ADMIN_MODE", isAdmin };
};
export default withRouter(Routes);
