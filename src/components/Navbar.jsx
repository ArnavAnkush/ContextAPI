const Navbar = () => {
  return (
    <div className="h-15 bg-black text-white rounded p-5 flex items-center justify-between">
      <div>logo</div>

      <div className="flex items-center gap-10 text-xl">
        <p>Home</p>
        <p>Cart</p>
      </div>

      <button>Login</button>
    </div>
  )
}

export default Navbar