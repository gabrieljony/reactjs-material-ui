import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "../App";
import Album from "../pages/Album";
import Blog from "../pages/Blog";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Pricing from "../pages/Pricing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/album" component={Album} />
      <Route path="/blog" component={Blog} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
    </Switch>
  );
};
