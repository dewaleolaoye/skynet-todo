import { navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import { client, hostApp } from '../../constant';

const Login = () => {
  const [loading, SetLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    SetLoading(true);
    try {
      const mySky = await client.loadMySky(hostApp);

      await mySky.requestLoginAccess();

      const checkLogin = await mySky.checkLogin();

      if (checkLogin) {
        localStorage.setItem('token', checkLogin);

        window.location.href = '/home';
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error, 'ERROR HERE');
    }
  };

  useEffect(() => {
    import('../Home/Home');
  }, []);

  return (
    <div className='login'>
      <h1>Request Login Access</h1>
      <p>Type something or I won't grant you access</p>

      <form onSubmit={handleSubmit}>
        <input required placeholder='request access' />
        <button
          disabled={loading ? true : false}
          style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'loading...' : 'Submit'}
        </button>
      </form>

      <p>** Allow popups please</p>
    </div>
  );
};

export default Login;
