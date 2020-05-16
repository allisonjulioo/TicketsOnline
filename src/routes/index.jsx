import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Single from "@/pages/Single";

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
        <Route path="**" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
