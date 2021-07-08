import { lazy, Suspense, useEffect, useState } from 'react';
import { Redirect } from '@reach/router';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
const AuthenticatedApp = lazy(() => import('./pages/Auth/Authenticated'));
const UnauthenticatedApp = lazy(() => import('./pages/Auth/UnAuthenticated'));

function App() {
  const auth = localStorage.getItem('token');
  const [state, setState] = useState(auth);

  useEffect(() => {
    setState(auth);
  }, [auth]);

  // console.log(localStorage.getItem('token'), 'token');
  console.log(auth, state, 'auth');

  return (
    <div className='App'>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Application</div>}>
          {state ? (
            <AuthenticatedApp />
          ) : (
            <>
              <UnauthenticatedApp />
              <Redirect noThrow from='/' to='/' />
            </>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
