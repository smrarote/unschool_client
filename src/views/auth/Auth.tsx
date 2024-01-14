/* eslint-disable @typescript-eslint/no-unused-vars */
import LoginForm from '@components/forms/LoginForm';
import SignInForm from '@components/forms/SignInForm';
import { useState } from 'react';
export default function Auth() {
  const [isSignin, setIsSignin] = useState(true);
  const updateIsSignin = (value: boolean): void => {
    setIsSignin(value);
  };
  return <>{isSignin ? <LoginForm updateActiveForm={updateIsSignin} /> : <SignInForm updateActiveForm={updateIsSignin} />}</>;
}
