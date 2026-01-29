import React, { useState } from 'react';

const initialConversations = [
  {
    id: 1,
    name: "Loïs",
    avatar: "https://i.pravatar.cc/150?u=lois",
    lastMessage: "Salut, pour la séance jambes on peut décaler...",
    time: "10:30",
    chatHistory: [
        { id: 1, sender: 'them', text: "Salut, pour la séances jambes on peut décaler à 18h ?" },
        { id: 2, sender: 'me', text: "Pas de souci, 18h c'est parfait !" }
    ]
  },
  {
    id: 2,
    name: "Marius",
    avatar: "https://i.pravatar.cc/150?u=marius",
    lastMessage: "T'es dispo quand ?",
    time: "hier",
    chatHistory: [
        { id: 1, sender: 'them', text: "Yo, chaud pour la salle ?" },
        { id: 2, sender: 'them', text: "T'es dispo quand ?" }
    ]
  }
];

export default function ChatApp() {
  const [activeId, setActiveId] = useState(1);
  const activeConv = initialConversations.find(c => c.id === activeId);

  return (
    <div className="flex h-full w-full bg-white overflow-hidden rounded-tl-3xl shadow-2xl">
      <div className="w-80 flex-shrink-0 border-r border-gray-200 overflow-y-auto hidden md:block">
        <div className="p-4 border-b font-bold text-xl text-gray-800">Messages</div>
        {initialConversations.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`relative w-full p-4 flex items-center cursor-pointer border-b hover:bg-gray-50 transition-colors
              ${activeId === c.id ? 'bg-blue-50 border-l-4 border-l-blue-900' : 'bg-white border-l-4 border-l-transparent'}
            `}
          >
            <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover border border-gray-300 flex-shrink-0" />
            <div className="ml-4 overflow-hidden w-full">
              <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-800">{c.name}</span>
                  <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{c.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{c.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col bg-gray-50">
        {activeConv && (
            <div className="p-4 bg-white border-b flex items-center shadow-sm">
                <img src={activeConv.avatar} alt={activeConv.name} className="w-10 h-10 rounded-full mr-3"/>
                <h2 className="font-bold text-lg text-gray-800">{activeConv.name}</h2>
            </div>
        )}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {activeConv ? (
                activeConv.chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs px-4 py-2 rounded-lg shadow-sm ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex h-full items-center justify-center text-gray-400">Sélectionnez une conversation</div>
            )}
        </div>
        <div className="p-4 bg-white border-t">
            <input type="text" placeholder="Écrivez votre message..." className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 transition" />
        </div>
      </div>
    </div>
  );
}
