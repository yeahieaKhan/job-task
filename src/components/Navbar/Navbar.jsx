import React from "react";
import Img from "../../assets/img.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-base-100 shadow-sm">
        <div className="">
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
              tabIndex="-1"
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
          <a>
            <img src={Img} alt="" />
          </a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-xl  px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Reunion</a>
            </li>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Be a Member</a>
            </li>
            <li>
              <a>Executives</a>
            </li>
            <li>
              <a>Dubana Talk</a>
            </li>
            <li>
              <a>Articals</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              {" "}
              <button className="btn btn-secondary">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
