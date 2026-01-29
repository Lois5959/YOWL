import React, { useState } from 'react';

interface AuthProps {
  onLogin: () => void;
}

export default function Auth({ onLogin }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden z-50 bg-white">

      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-50" />

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md mx-4 relative z-10">

        <h2 className="text-3xl font-black text-[#2D427B] mb-2 text-center">
          {isLogin ? 'Bon retour !' : 'Rejoins-nous !'}
        </h2>
        <p className="text-gray-500 text-center mb-8">
          {isLogin ? 'Connecte-toi à Gym Connect' : 'Crée ton compte maintenant'}
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Ton Prénom"
              className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B] transition"
            />
          )}

          <input
            type="email"
            placeholder="Adresse Email"
            className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B] transition"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-gray-100 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#2D427B] transition"
          />

          <button
            type="submit"
            className="w-full bg-[#2D427B] text-white font-bold py-3 rounded-xl hover:bg-[#1e2e58] transition-transform hover:scale-[1.02] shadow-lg mt-2"
          >
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Pas encore de compte ? " : "Déjà un compte ? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#2D427B] font-bold hover:underline"
          >
            {isLogin ? "Inscris-toi" : "Connecte-toi"}
          </button>
        </div>

      </div>
    </div>
  );
}
