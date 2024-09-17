import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='  w-full p-4'>
      {children}
    </div>
  );
};

export default Layout;
