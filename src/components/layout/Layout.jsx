import React from 'react';
import NavbarV2 from './NavbarV2';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavbarV2 />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;