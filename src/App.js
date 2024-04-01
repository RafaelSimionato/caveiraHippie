import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Web3Page from './Web3Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/web3" component={Web3Page} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
