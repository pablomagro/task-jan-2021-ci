import React from 'react';
import { useGoogleAuth } from '../googleAuth';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        // <button onClick={signOut}>Logout</button>
        <button onClick={signOut} className="button">
          {/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}
          <span className="buttonText">Sign out</span>
        </button>
      );
};

export default LogoutButton;