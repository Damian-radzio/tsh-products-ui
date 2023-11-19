import React, { useState } from 'react';
import LoginBtn from './components/LoginBtn';
import { Link } from 'react-router-dom';
const UserPanel = (): JSX.Element => {
  return (
    <Link to="/login">
      <LoginBtn />
    </Link>
  );
};

export default UserPanel;
