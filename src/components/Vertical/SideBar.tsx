function SideBar() {
  return (
    <>
      <div className="fixed">
        <aside
          id="default-sidebar"
          className="top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-600">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 mb-4 text-gray-900 rounded-lg dark:text-white bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mb-4 p-3 text-gray-900 rounded-lg dark:text-white bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Courses</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mb-4 p-3 text-gray-900 rounded-lg dark:text-white bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center align-bottom mb-4 p-3 text-gray-900 rounded-lg dark:text-white bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default SideBar;
