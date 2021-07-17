import { lazy, Suspense, useEffect, useState } from 'react';
import { Redirect } from '@reach/router';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { QueryClient, QueryClientProvider } from 'react-query';
const AuthenticatedApp = lazy(() => import('./pages/Auth/Authenticated'));
const UnauthenticatedApp = lazy(() => import('./pages/Auth/UnAuthenticated'));

function App() {
  const auth = localStorage.getItem('token');
  const [state, setState] = useState(auth);

  useEffect(() => {
    setState(auth);
  }, [auth]);

  const queryClient = new QueryClient();

  return (
    <div className='App'>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Application</div>}>
          <QueryClientProvider client={queryClient}>
            {state ? (
              <AuthenticatedApp />
            ) : (
              <>
                <UnauthenticatedApp />
                <Redirect noThrow from='/' to='/' />
              </>
            )}
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
