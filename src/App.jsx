import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import Secret from './components/Secret';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/secret">
            <Secret />
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
