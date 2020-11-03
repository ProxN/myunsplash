import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';

const App: React.FC = () => {
  const [loginForm, setLoginForm] = useState(false);
  useEffect(() => {
    const value = localStorage.getItem('user');
    if (!value) {
      setLoginForm(true);
    }
  }, []);

  const handleCloseForm = (): void => {
    setLoginForm(false);
  };
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>
      {loginForm && <LoginForm onClose={handleCloseForm} />}
    </>
  );
};

export default App;
