import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import * as authActions from "../../redux/auth/authActions";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: any) => state.auth);

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div>
        {user?.username}
        <br />
        {user?.email}
        <br />
        <button onClick={() => logout()}>logout</button>
      </div>
    </>
  );
};

export default Dashboard;
