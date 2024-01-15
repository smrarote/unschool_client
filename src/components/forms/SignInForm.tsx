import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
function SignInForm(props: { updateActiveForm: (value: boolean) => void }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [border, setBorder] = useState('border-grey-light');
  const handleSubmit = (): void => {
    toast.success('Success : Create Account 👋', {
      position: toast.POSITION.TOP_RIGHT,
    });
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
      setBorder('red');
    } else {
      setBorder('green');
    }
  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Create Account</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fuser_name"
              placeholder="Uesr Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex mb-4 ">
              <input
                type={type}
                className="border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex justify-around items-center" onClick={handleToggle}>
                <Icon className="absolute mr-10" icon={icon} size={20} />
              </span>
            </div>
            <input
              type="password"
              className="block border  w-full p-3 rounded mb-4"
              style={{ border }}
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => {
                checkPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-700 focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Create Account
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
