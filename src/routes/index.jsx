import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "@/pages/Home";
import Single from "@/pages/Single";
import AuthLogin from "@/pages/Auth/Login";
import AuthRegister from "@/pages/Auth/Register";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Single} />
      <Route path="/login" component={AuthLogin} />
      <Route path="/register" component={AuthRegister} />
      <Route path="**" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
