// import { SkynetClient } from 'skynet-js';
import { navigate } from '@reach/router';
import { SkynetClient } from 'skynet-js';

const Login = () => {
  const client = new SkynetClient('https://siasky.net');
  const hostApp = 'host-app.hns';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(value, 'VALUE HERE');
    try {
      const mySky = await client.loadMySky(hostApp);

      await mySky.requestLoginAccess();
      const checkLogin = await mySky.checkLogin();

      if (checkLogin) {
        localStorage.setItem('token', checkLogin);
        // navigate('/home');
        window.location.href = '/home';
        // window.navigator
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error, 'ERROR HERE');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
