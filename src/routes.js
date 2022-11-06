import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";
import Calendar from "./containers/Calendar";
import Contests from "./containers/Contests";
import Submit from "./containers/Submit";
import FAQ from "./containers/FAQ";
import Community from "./containers/Community";
import Gallery from "./containers/Gallery";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={AssignmentList} />
    <Route exact path="/create/" component={AssignmentCreate} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
    <Route exact path="/profile/:id" component={Profile} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/contests" component={Contests} />
    <Route path="/submit" component={Submit} />
    <Route path="/faq" component={FAQ} />
    <Route path="/community" component={Community} />
    <Route path="/gallery" component={Gallery} />
  </Hoc>
);

export default BaseRouter;
