import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "../App";
import Album from "../pages/album/Album";
import Blog from "../pages/blog/Blog";
import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";
import Pricing from "../pages/pricing/Pricing";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/album" component={Album} />
      <Route path="/blog" component={Blog} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};
