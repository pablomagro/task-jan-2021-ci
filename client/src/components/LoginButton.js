import React from 'react';
import { useGoogleAuth } from '../googleAuth';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
        <button onClick={signIn} className="button">
          <span className="buttonText">Sign in with Google</span>
        </button>
      );
};

export default LoginButton;