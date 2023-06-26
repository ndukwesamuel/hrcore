import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AdminPrivateRoute = ({ children }) => {
  const { extra } = useSelector((state) => state.reducer.loginReducer);

  if (extra === 1) {
    return children;
  }

  return <Navigate to="/employee" />;
};

export const EmployeePrivateRoute = ({ children }) => {
  const { extra } = useSelector((state) => state.reducer.loginReducer);

  if (extra === 0) {
    return children;
  }

  return <Navigate to="/admin" />;
};

function PrivateRoute({ children }) {
  const { authtoken, extra } = useSelector(
    (state) => state.reducer.loginReducer
  );

  if (!authtoken) {
    // not logged in so redirect to login page with the return url
    // return <Navigate to="/" state={{ from: history.location }} />;

    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
