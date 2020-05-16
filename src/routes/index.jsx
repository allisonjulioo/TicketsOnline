import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Home from "@/pages/Site/Home";
import Single from "@/pages/Site/Single";

import AuthLogin from "@/pages/Auth/Login";
import AuthRegister from "@/pages/Auth/Register";
import RegisterMovie from "../pages/Admin/RegisterMovie";

const Routes = ({ history }) => {
  useEffect(
    () =>
      history.listen((e) => {
        console.log(e);
      }),
    [history]
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Single} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/register" component={AuthRegister} />
        <Route path="/new/movie" component={RegisterMovie} />
        <Route path="**" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
