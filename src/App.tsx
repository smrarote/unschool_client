import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import NoPage from './views/noPage/NoPage';
import Auth from './views/auth/Auth';
import NavBar from './components/Horizontal/NavBar';
import Footer from './components/Horizontal/Footer';
import SideBar from './components/Vertical/SideBar';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
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
