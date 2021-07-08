import { Router } from '@reach/router';
import Login from '../Login/Login';

const UnAuthenticated = () => {
  return (
    <Router>
      <Login path='/' />
    </Router>
  );
};

export default UnAuthenticated;
