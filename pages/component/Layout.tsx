import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <NavBar />
        <br /><br />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
