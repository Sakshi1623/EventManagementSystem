function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          EventHub
        </h1>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-200 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-200 transition">
            Events
          </a>

          <a href="#" className="hover:text-blue-200 transition">
            Login
          </a>

          <a
            href="#"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Register
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;