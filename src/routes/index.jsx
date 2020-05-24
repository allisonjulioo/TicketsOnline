import React, { useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

// site
import Home from "@/pages/Site/Home";
import Single from "@/pages/Site/Single";
import ChoosePlace from "@/pages/Site/ChoosePlace";
import Checkout from "../pages/Site/Checkout";
import Tickets from "../pages/Site/Tickets";

// auth
import AuthLogin from "@/pages/Auth/Login";
import AuthRegister from "@/pages/Auth/Register";
import RegisterMovie from "../pages/Admin/RegisterMovie";

const Routes = ({ history }) => {
  setHomeRouter(history);
  useEffect(() => history.listen((e) => setHomeRouter(e)), [history]);
  function setHomeRouter(e) {
    if (e && e.location && e.location.pathname) {
      document.body.classList = "";
      const urlArr = e.location.pathname.split("/");
      if (urlArr[urlArr.length - 1]) {
        document.body.classList.add(urlArr[urlArr.length - 1] || "");
      }
    }
  }
  return (
    <Switch>
      <Route path="/main" component={Home} />
      <Route path="/movie/:id" exact component={Single} />
      <Route path="/movie/:id/place" component={ChoosePlace} />
      <Route path="/movie/:id/checkout" component={Checkout} />
      <Route path="/movie/:id/ticket" component={Tickets} />
      <Route path="/login" component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="/new/movie" component={RegisterMovie} />
      <Redirect from="*" to="/main" />
    </Switch>
  );
};

export default withRouter(Routes);
