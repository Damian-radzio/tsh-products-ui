import React, { useState } from 'react';
import LoginBtn from './components/LoginBtn';
const UserPanel = (): JSX.Element => {
  const [isUserLoggedIn] = useState(false);
  return (
    <>
      {isUserLoggedIn ? (
        <p>ikona</p>
      ) : (
        <>
          <LoginBtn />
        </>
      )}
    </>
  );
};

export default UserPanel;
