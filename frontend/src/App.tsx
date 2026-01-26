import React, { useState } from 'react';
import './App.css';
import { Sidebar } from './assets/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChatApp from './components/ChatApp';

function App() {
  const [currentPage, setCurrentPage] = useState('feed');

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-50" />
      <div className="min-h-screen relative flex flex-col">
        <Navbar />
        <div className="flex flex-1 w-full overflow-hidden h-[calc(100vh-80px)]">
          <Sidebar setPage={setCurrentPage} />
          <div className="flex-1 h-full overflow-hidden">
             {currentPage === 'message' ? (
                <ChatApp />
             ) : (
                <Feed />
             )}
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
