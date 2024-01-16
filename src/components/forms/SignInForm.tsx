import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { tick } from 'react-icons-kit/ikons/tick';
import { close } from 'react-icons-kit/ikons/close';
import RequestManager from '@/services/requestManager/requestManager.service';
function SignInForm(props: { updateActiveForm: (value: boolean) => void }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [match, setMatch] = useState(false);
  const [isInputValid, setInputValid] = useState(true);
  const [loading, setLoading] = useState(false);
  interface CreateAccounSuccess extends success {
    data: {
      username: string;
      email: string;
      createdAt: string;
    };
  }
  interface CreateAccounFailure extends fail {
    body: object;
  }
  const handleSubmit = async (): Promise<void> => {
    if (!validation()) {
      setInputValid(false);
      toast.error('Invalid Inputs 🫤', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    // post the request

    try {
      setLoading(true);
      const response = await new RequestManager<CreateAccounSuccess | CreateAccounFailure>('/api/v1/user/signup', {}, null, {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
      }).post();

      if (!response.success) {
        if (response.code === 409) {
          toast.error('Failed : User exist with email | username 🫤', {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (response.code === 422) {
          toast.error('Failed : invalid inputs 🫤', {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.warning('Failed : Disconnected 🫤', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        toast.success('Success : Create Account 👋', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error: unknown) {
      toast.error('Error: Something Went Wrong 🤯', {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  const validation = (): boolean => {
    // user name, first_name, last_name, email, password
    const usernameRegex = RegExp('^[a-zA-Z0-9_@$&*]{3,}$'),
      nameRegex = RegExp('^[a-zA-Z]{3,}$'),
      emailRegex = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      passwordRegex = RegExp('^[a-zA-Z0-9_@$&*]{3,}$');
    if (
      !usernameRegex.test(username) ||
      !nameRegex.test(firstName) ||
      !nameRegex.test(lastName) ||
      !emailRegex.test(email) ||
      !passwordRegex.test(password) ||
      !match
    ) {
      return false;
    }
    return true;
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  const checkPassword = (value: string | null) => {
    if (password != value) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Create Account</h1>
            <div className="mb-4">
              <input
                type="text"
                className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                name="user_name"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              {!isInputValid ? <small className="text-red-400 flex justify-end">min lenght 3, alphanumeric, (_,$,@,&,*) </small> : null}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {!isInputValid ? <small className="text-red-400 flex justify-end">min lenght 3, alphabetic</small> : null}
            </div>

            <div className="mb-4">
              <input
                type="text"
                className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                name="last_name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {!isInputValid ? <small className="text-red-400 flex justify-end">min lenght 3, alphabetic</small> : null}
            </div>

            <div className="mb-4">
              <input
                type="email"
                className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isInputValid ? <small className="text-red-400 flex justify-end">check email</small> : null}
            </div>

            <div className="mb-4">
              <div className="flex">
                <input
                  type={type}
                  className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={20} />
                </span>
              </div>
              {!isInputValid ? <small className="text-red-400 flex justify-end">min lenght 3, alphanumeric, (_,$,@,&,*)</small> : null}
            </div>
            <div className="flex mb-4">
              <input
                type="password"
                className={`block border ${!isInputValid ? 'border-red-400' : 'border-grey-light'}  w-full p-3 rounded`}
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  checkPassword(e.target.value);
                }}
              />
              {match ? (
                <span className="flex justify-around items-center">
                  <Icon className="absolute mr-10 text-green-500" icon={tick} size={20} />
                </span>
              ) : (
                <span className="flex justify-around items-center">
                  <Icon className="absolute mr-10 text-red-500" icon={close} size={20} />
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-700 focus:outline-none my-1"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Creating Account ...' : 'Create Account'}
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <button className="no-underline border-b border-blue-200 text-blue-500 p-1" onClick={() => props.updateActiveForm(true)}>
              Log in
            </button>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
