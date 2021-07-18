import { Router } from '@reach/router';
import Home from '../Home/Home';

const UnAuthenticated = () => {
  return (
    <Router>
      <Home path='/'></Home>
    </Router>
  );
};

export default UnAuthenticated;
