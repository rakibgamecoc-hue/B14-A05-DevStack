import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className="hover:text-pink-600"><a>Home</a></li>
              <li className="hover:text-pink-600"><a>Technologies</a></li>
              <li className="hover:text-pink-600"><a>Projects</a></li>
              <li className="hover:text-pink-600"><a>About</a></li>
              <li className="hover:text-pink-600"><a>Contact</a></li>
            </ul>
          </div>
          <img src={logo} alt="Logo text" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-pink-600"><a>Home</a></li>
            <li className="hover:text-pink-600"><a>Technologies</a></li>
            <li className="hover:text-pink-600"><a>Projects</a></li>
            <li className="hover:text-pink-600"><a>About</a></li>
            <li className="hover:text-pink-600"><a>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
           <a className="btn rounded-2xl font-normal bg-gray-100 active:bg-pink-500 hover:bg-pink-500">Sign In</a>
           <a className="btn rounded-2xl font-normal bg-pink-500 active:bg-pink-500 hover:bg-pink-500">Sign Up</a>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;