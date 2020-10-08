import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main'
import Resume from './components/Resume'
import res from './assets/resume.pdf'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/resume">

            <Redirect to={res} target="_blank" />

          </Route>
          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
