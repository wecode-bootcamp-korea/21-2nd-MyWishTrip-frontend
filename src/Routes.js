import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/siginin" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
