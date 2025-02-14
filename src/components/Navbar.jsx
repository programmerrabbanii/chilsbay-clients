import { Link } from "react-router";
import logo from "../assets/logo.png"
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm pl-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
         
           <img src={logo} alt="" />
       
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <Link className="mr-8 text-lg" to="/"> Eat & Drink </Link>
            <Link className="mr-8 text-lg" to="/club"> Club</Link>
            <Link className="mr-8 text-lg" to="/things">Things To Do</Link>
            <div className="flex items-center mr-8 text-lg ">
            <FiShoppingCart className="mx-3.5" />
            <span className="flex items-center">
            <VscAccount /> 
            <h4>Account</h4>
            </span>
            </div>


          </ul>
        </div>
        <div className="navbar-end"> 
          <a className="btn bg-[#0E8BFF] text-white rounded-s-sm">Contact Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
