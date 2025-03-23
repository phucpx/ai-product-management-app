// client/src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children} {/* Nơi để render các component con (content) */}
      </main>
    </div>
  );
}

export default Layout;