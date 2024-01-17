import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import NoPage from './views/noPage/NoPage';
import Auth from './views/auth/Auth';
import CourseList from './views/courses/CourseList';
import Layout from './views/layout/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={4}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
