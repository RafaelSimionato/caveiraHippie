import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import IndexPage from './IndexPage';
import HomePage from './HomePage';
import Web3Page from './Web3Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/web3" component={Web3Page} />
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
