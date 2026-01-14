import './App.css'
import { Sidebar } from './assets/Sidebar.tsx'
import Navbar from './components/Navbar.tsx'
import UserCard from './components/UserCard.tsx'

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[url('/background.jpg')] bg-cover bg-center" />
      <div className="min-h-screen relative z-10">
        <Sidebar />
        <Navbar />
        <UserCard />
      </div>
    </>
  )
}

export default App
