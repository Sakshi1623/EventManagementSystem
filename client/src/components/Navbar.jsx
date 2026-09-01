function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">

        <h1 className="text-2xl font-bold">
          EventHub
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-blue-200">
            Home
          </a>

          <a href="#" className="hover:text-blue-200">
            Events
          </a>

          <a href="#" className="hover:text-blue-200">
            Login
          </a>

          <a
            href="#"
            className="rounded-lg bg-white px-4 py-2 text-blue-600 hover:bg-blue-50"
          >
            Register
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;  