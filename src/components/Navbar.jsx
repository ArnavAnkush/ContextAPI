
const Navbar = ({setIsCartOpen}) => {
  return (
    <nav className="w-full bg-gray-950 px-2 py-4 text-white shadow-lg rounded-xl">

      <div className=" flex px-4 items-center justify-between">


        <div className="text-2xl font-extrabold tracking-tight">
          Shop<span className="text-indigo-500">Zone.</span>
        </div>


        <div className="flex items-center gap-10 text-base font-medium text-gray-300">

          <a onClick={() => setIsCartOpen(false)}
            href="#home"
            className="transition-colors duration-200 hover:text-indigo-400"
          >
            Home
          </a>

          <a onClick={() => setIsCartOpen(true)}
            href="#cart"
            className="transition-colors duration-200 hover:text-indigo-400"
          >
            Cart
          </a>

        </div>

        <button className="rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-indigo-500 active:scale-95">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar
