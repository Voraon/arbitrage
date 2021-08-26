import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  // Redirect 
} from "react-router-dom";
import CountClock from "./components/CountClock";
import Example from './components/Example'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link  to={{
    pathname: "/topics",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}>Topics</Link>
          </li>
          <li>
            <Link to="/user/:username">Username</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <CountClock />
          </Route>
          <Route path="/topics">
          {/* <Redirect to="/about" /> */}
            <Topics />
          </Route>
          <Route path="/user/:username" component={User} />
          <Route path="/">
            <Example />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function User(props) {
  console.log(props.match.params)
  return <h1>Hello {props.match.params.username}!</h1>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}