import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle';
import StorageManager from '@/services/storageManager/storageManager.service';
import { useEffect, useState } from 'react';
type UserStore = {
  token: string;
  user_id: string;
  username: string;
  createdAt: string;
};
function NavBar() {
  const [user, setUser] = useState<UserStore | null>(null);
  useEffect(() => {
    setUser(new StorageManager().getUser());
  }, []);
  return (
    <>
      <nav className="sticky top-0">
        <div>
          <div className="flex justify-between h-16 px-10 shadow items-center bg-gray-100">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">UnSchool</h1>
            </div>
            {user ? (
              <span className="flex justify-around items-center">
                <Icon className="mx-2" icon={ic_account_circle} size={40} />
                {user?.username}
              </span>
            ) : (
              <div className="flex space-x-4 items-center">
                <Link to={'/auth'} className="bg-gray-800 px-4 py-2 rounded text-white hover:bg-gray-400 text-sm">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
