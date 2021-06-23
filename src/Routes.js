import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/siginin" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
