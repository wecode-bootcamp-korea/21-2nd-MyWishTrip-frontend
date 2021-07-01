import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import SignupEmail from './Pages/Signup/SignupEmail';
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoginEmail from './Pages/Login/LoginEmail';
import Category from './Pages/Category/Category';
import Detail from './Pages/Detail/Detail';
import Modal from './Components/Detail/Modal';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup_email" component={SignupEmail} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signin_email" component={LoginEmail} />
        <Route exact path="/siginin" component={Login} />
        <Route exact path="/product" component={Category} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/modal" component={Modal} />
        <Route exact path="/products" component={Category} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
