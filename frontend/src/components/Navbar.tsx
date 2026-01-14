import '../App.css'

function Navbar() {

  return (
    <nav className="font-bold sticky top-0 z-50 w-full h-16 bg-orange-400 shadow-md flex items-center justify-center relative">
        <img className = "absolute left-4 h-12 object-contain" src="logo.png" alt='logo'></img>
        <div className="flex gap-2 text-[25px] md:text-[45px]">
            <span className="text-white">GYM</span>
            <span className='text-black'>Connect</span>
        </div>
    </nav>
  )
}

export default Navbar
