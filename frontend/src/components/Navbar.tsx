import '../App.css'

function Navbar() {

  return (
      <nav className="bg-[#2D427B] sticky top-0 z-50 w-full h-20 shadow-md flex items-center justify-center relative font-sans">

        <img className="absolute left-4 h-15 object-contain" src="logo.png" alt='logo'></img>

        <div className="flex gap-4 text-[25px] md:text-[45px] items-center">
            <span className="text-white font-black tracking-tight">GYM</span>
            <span className='text-white font-bold'>Connect</span>
        </div>
    </nav>
  )
}

export default Navbar
