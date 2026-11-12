import { useState } from 'react';
import './index.css';
import { Sidebar } from './assets/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChatApp from './components/ChatApp';
import Auth from './components/Auth';
import type { Member } from './types';

function App() {
  // reste connecté après un rafraîchissement si un jeton est enregistré
  const [isConnected, setIsConnected] = useState(() => localStorage.getItem('token') !== null);
  const [currentPage, setCurrentPage] = useState('feed');

  const [targetUser, setTargetUser] = useState<Member | null>(null);

  const handleStartChat = (user: Member) => {
    setTargetUser(user);
    setCurrentPage('message');
  };

  if (!isConnected) {
    return <Auth onLogin={() => setIsConnected(true)} />;
  }

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#1e2e58] bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-50" />

      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <div className="flex-shrink-0 z-50"><Navbar /></div>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar setPage={setCurrentPage} />

          <main className="flex-1 h-full overflow-hidden relative">
             {currentPage === 'message' ? (
                <ChatApp initialUser={targetUser ?? undefined} />
             ) : (
                <Feed onJoin={handleStartChat} />
             )}
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
