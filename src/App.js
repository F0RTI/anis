import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import Info from './components/App.info';
import LenguageSet from './components/settings/language/Data.info';
// TODO: Бар на котором будут кнопки и можно будет открывать виджет или просто линия виджетов и комбинировано
import Form from './components/form';
// import WeatherApp from './components/weather/app/WeatherApp';
// import WeatherShow from './components/weather/show/WeatherShow';

const history = createBrowserHistory();
// main vars App
// let LenguageSet = require('./components/settings/language/App.language');
let AboutUser = require('./components/settings/users/About.user');
// let AppConfig = require('./components/App.config');
// const renderAppName = <App />;

// let language = require('./components/settings/language/App.language');
// console.log(LenguageSet);
let configurations = {
  lang: AboutUser.infoText.language
}

class Navigation extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li>
              <Link to={{
                pathname: "/",
                state: { fromDashboard: true }
              }}
              >Home</Link>
            </li>
            <li>
              {/* <HashRouter basename="/today" /> */}
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/settings" component = {Settings} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <div><Info {...configurations} /></div>
      <div><LenguageSet/></div>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <p><Form {...configurations} /></p>
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Navigation;