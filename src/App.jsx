import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Secret from "./components/Secret";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/secret">
            <Secret />
          </Route>
          {/* <Route path="/todo">{() => { 
            window.location.href = 'https://docs.google.com/document/d/14qJtspTNkCxQXGH6DP_T2X3kjIoc-Bj-lPLP7PuXmYE/edit'; 
            return null;
              }}    
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
