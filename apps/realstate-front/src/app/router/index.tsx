import { Routes, Route } from 'react-router-dom';
import LayoutAuth from '../Layouts/Auth';
import LayoutRecovery from '../Layouts/Recovery';
import SignIn from '../pages/SignIn';
import CreateAccount from '../pages/CreateAccount';
import NewPassword from '../pages/NewPassword';
import SendCode from '../pages/SendCode';
import VerifyCode from '../pages/VerifyCode';
import Dashboard from '../pages/Dashboard';

const RouterComponent = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutAuth>
            <SignIn />
          </LayoutAuth>
        }
      />
      <Route
        path="/create-account"
        element={
          <LayoutAuth>
            <CreateAccount />
          </LayoutAuth>
        }
      />
      <Route
        path="/new-password"
        element={
          <LayoutRecovery>
            <NewPassword />
          </LayoutRecovery>
        }
      />
      <Route
        path="/send-code"
        element={
          <LayoutRecovery>
            <SendCode />
          </LayoutRecovery>
        }
      />
      <Route
        path="/verify-code"
        element={
          <LayoutRecovery>
            <VerifyCode />
          </LayoutRecovery>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="*"
        element={
          <LayoutAuth>
            <SignIn />
          </LayoutAuth>
        }
      />
    </Routes>
  );
};

export default RouterComponent;
