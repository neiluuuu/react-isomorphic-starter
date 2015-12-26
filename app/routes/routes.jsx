/** @jsx React.DOM */

var React = require("react");
var Router = require("react-router");
var Application = require("../components/Application.jsx");
var Home = require("../components/Home.jsx");
var About = require("../components/About.jsx");
var NotFound = require("../components/NotFound.jsx");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route handler={Application} path="/">
    <DefaultRoute handler={Home}/>
    <Route name="about" handler={About} />
    <NotFoundRoute handler={NotFound} />
    <Redirect from="company" to="about" />
  </Route>
);

module.exports = routes;