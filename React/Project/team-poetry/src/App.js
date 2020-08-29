import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import PoemDetails from "./components/poems/PoemDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePoem from "./components/poems/CreatePoem";
import Profile from "./components/layout/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/poem/:id" component={PoemDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/upload" component={CreatePoem} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
