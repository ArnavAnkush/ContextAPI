const Navbar = () => {
  return (
    <div className="h-10 bg-black p-5 flex items-center justify-between">
      <div>logo</div>

      <div className="flex items-center gap-5">
        <p>Home</p>
        <p>Cart</p>
      </div>

      <button>Login</button>
    </div>
  )
}

export default Navbar