import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "@/pages/Home";
import Single from "@/pages/Single";
import Auth from "@/pages/Auth";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Single} />
      <Route path="/login" component={Auth} />
      <Route path="**" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
