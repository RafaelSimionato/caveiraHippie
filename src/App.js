import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './IndexPage';
import PresentationPage from './PresentationPage';
import HomePage from './HomePage';
import Web3Page from './Web3Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/PresentationPage" component={PresentationPage} />
          <Route exact path="/Web3Page" component={Web3Page} /> {/* Ensure the path matches the Web3Page component */}
          <Route exact path="/HomePage" component={HomePage} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
