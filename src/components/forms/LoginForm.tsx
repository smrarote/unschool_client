import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import RequestManager from '@/services/requestManager/requestManager.service';
import StorageManager from '@/services/storageManager/storageManager.service';
type LoginResponse = {
  code: number;
  success: boolean;
  message: string;
  data: {
    token: string;
    user_id: string;
    user_name: string;
    createdAt: string;
  };
};
function LoginForm(props: { updateActiveForm: (value: boolean) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const validateInput = (): boolean => {
    return !(username === '' || password === '');
  };
  const handleSubmit = async (): Promise<void> => {
    if (!validateInput()) {
      toast.warning('Require password and username', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await new RequestManager<LoginResponse>('http://localhost:3000/api/v1/user/signin', {}, null, {
        username,
        password,
      }).post();
      if (!response.success) {
        if (response.response?.response?.data?.status === 403) {
          toast.error('Failed : Invalid Credentials 🫤', {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.warning('Failed : Disconnected 🫤', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        const loginRes = response.response as LoginResponse;
        new StorageManager().setUser(loginRes.data);
        toast.success('Success : login success 😀', {
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
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login To Account </h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-black hover:bg-green-700 focus:outline-none my-1"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Loggin ...' : 'Login'}
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Crate Account ?
            <button className="no-underline border-b border-blue-200 text-blue-500 p-1" onClick={() => props.updateActiveForm(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
