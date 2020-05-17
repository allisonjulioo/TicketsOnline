import React, { useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "@/pages/Site/Home";
import Single from "@/pages/Site/Single";

import AuthLogin from "@/pages/Auth/Login";
import AuthRegister from "@/pages/Auth/Register";
import RegisterMovie from "../pages/Admin/RegisterMovie";

const Routes = ({ history }) => {
  setHomeRouter(history);
  useEffect(() => history.listen((e) => setHomeRouter(e)), [history]);
  function setHomeRouter(e) {
    if (e && e.location && e.location.pathname) {
      document.body.classList = "";
      document.body.classList.add(
        e.location.pathname.replace("/", "").toLowerCase()
      );
    }
  }
  return (
    <Switch>
      <Route path="/main" component={Home} />
      <Route path="/movie/:id" component={Single} />
      <Route path="/login" component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="/new/movie" component={RegisterMovie} />
      <Redirect from="*" to="/main" />
    </Switch>
  );
};

export default withRouter(Routes);
