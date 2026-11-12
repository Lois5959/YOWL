import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Conversation, Member } from '../types';
import Avatar from './Avatar';

const defaultConvs: Conversation[] = [
  { id: 99, name: "Loïs", lastMsg: "Salut!", history: [] },
];

// Ouvre la conversation avec le membre choisi dans le fil (la crée si besoin).
// Le composant est recréé à chaque ouverture de la page Message : l'état initial suffit.
function initialConversations(initialUser?: Member): Conversation[] {
  if (!initialUser || defaultConvs.some(c => c.id === initialUser.id)) return defaultConvs;
  return [...defaultConvs, {
    id: initialUser.id,
    name: initialUser.name,
    lastMsg: "Nouveau",
    history: [],
  }];
}

export default function ChatApp({ initialUser }: { initialUser?: Member }) {
  const [convs, setConvs] = useState<Conversation[]>(() => initialConversations(initialUser));
  const [activeId, setActiveId] = useState<number | null>(initialUser?.id ?? null);
  const [text, setText] = useState("");

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !activeId) return;

    setConvs(convs.map(c => c.id === activeId ? {
      ...c,
      history: [...c.history, { me: true, txt: text }],
      lastMsg: text
    } : c));

    setText("");
  };

  const active = convs.find(c => c.id === activeId);

  return (
    <div className="flex h-full w-full bg-white rounded-tl-3xl shadow-2xl overflow-hidden">
      <div className="w-80 border-r overflow-y-auto hidden md:block">
        <div className="p-4 font-bold border-b">Messages</div>
        {convs.map(c => (
          <div key={c.id} onClick={() => setActiveId(c.id)} className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 ${activeId === c.id ? 'bg-blue-50 border-l-4 border-blue-900' : ''}`}>
            <Avatar name={c.name} />
            <div className="ml-3 overflow-hidden">
                <div className="font-bold truncate">{c.name}</div>
                <div className="text-sm text-gray-500 truncate">{c.lastMsg}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col bg-gray-50">
        {active ? (
          <>
            <div className="p-4 bg-white border-b flex items-center font-bold text-lg">
                <span className="mr-3"><Avatar name={active.name} size={32} /></span> {active.name}
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {active.history.length === 0 && <p className="text-center text-gray-400 mt-10">Dites bonjour !</p>}
              {active.history.map((m, i) => (
                <div key={i} className={`flex ${m.me ? 'justify-end' : ''}`}>
                    <div className={`px-4 py-2 rounded-lg max-w-xs ${m.me ? 'bg-blue-600 text-white' : 'bg-white border'}`}>{m.txt}</div>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="p-4 bg-white border-t flex gap-2">
              <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border rounded-full px-4 py-2 outline-none focus:border-blue-500" placeholder="Message..." />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">➤</button>
            </form>
          </>
        ) : <div className="m-auto text-gray-400">Sélectionne une conversation</div>}
      </div>
    </div>
  );
}
