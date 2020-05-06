import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import detailJob from "./components/detailJob";
import notFound from "./components/NotFound";
import Login, { fakeAuth } from "./components/Login";
import "./App.css";
const App = (props) => {
  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          fakeAuth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/search" component={SearchPage} />
        <ProtectedRoute path="/job/:id" component={detailJob} />
        <Route path="" component={notFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
