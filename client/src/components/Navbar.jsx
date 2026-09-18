function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        <h1 className="text-xl font-bold sm:text-2xl">
          EventHub
        </h1>

        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">

          <a
            href="#"
            className="transition duration-300 hover:text-blue-200"
          >
            Home
          </a>

          <a
            href="#"
            className="transition duration-300 hover:text-blue-200"
          >
            Events
          </a>

          <a
            href="#"
            className="transition duration-300 hover:text-blue-200"
          >
            Login
          </a>

          <a
            href="#"
            className="rounded-lg bg-white px-3 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-blue-50 sm:px-4"
          >
            Register
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;