/* eslint-disable @typescript-eslint/no-unused-vars */
import LoginForm from '@/components/Forms/LoginForm';
import SignInForm from '@/components/Forms/SignInForm';
import { useState, useEffect } from 'react';

export default function Auth() {
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  const updateIsSignin = (value: boolean): void => {
    setIsSignin(value);
  };
  return <>{isSignin ? <LoginForm updateActiveForm={updateIsSignin} /> : <SignInForm updateActiveForm={updateIsSignin} />}</>;
}
