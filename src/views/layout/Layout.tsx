import NavBar from '../../components/Horizontal/NavBar';
import Footer from '../../components/Horizontal/Footer';
import SideBar from '../../components/Vertical/SideBar';
import { ReactNode } from 'react';

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div>
          <SideBar />
        </div>
        <div className="itme-center">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
