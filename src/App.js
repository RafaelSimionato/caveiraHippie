import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './IndexPage';
import HomePage from './HomePage';
import SubPlatformSelectionPage from './SubPlatformSelectionPage';
import PresentationPage from './PresentationPage';
import Web3Page from './Web3Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/SubPlatformSelectionPage" component={SubPlatformSelectionPage} />
          <Route exact path="/PresentationPage" component={PresentationPage} />
          <Route exact path="/Web3Page" component={Web3Page} /> {/* Ensure the path matches the Web3Page component */}
          
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
