import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Drink from "../assets/Drink.jpeg";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/homepage");
  };
  return (
    <>
      {!user ? (
        <div className="navbar bg-graynav text-textnav ">
          <div className="navbar-start">
            <Link to="/homepage" className="btn btn-ghost normal-case text-xl">
              Pet Selected.
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/shop">shop</Link>
              </li>
              <li>
                <Link to="/">about us</Link>
              </li>
              <li>
                <Link to="/">blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
            {/* Dropdown */}
            <Link to="/login">
              <i className="fa-solid fa-user text-lg cursor-pointer mr-4"></i>
            </Link>
            {/* Cart */}
          </div>
        </div>
      ) : (
        <div className="navbar bg-graynav text-textnav ">
          <div className="navbar-start">
            <Link to="/homepage" className="btn btn-ghost normal-case text-xl">
              Pet Selected.
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/shop">shop</Link>
              </li>
              <li>
                <Link to="/">about us</Link>
              </li>
              <li>
                <Link to="/">blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>

            {/* Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" m-1">
                <i className="fa-solid fa-user text-lg cursor-pointer"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-sm bg-white border-none rounded-box w-52 z-50"
              >
                <div className="flex flex-row text-graynav justify-center items-center gap-5 mb-3 mt-1">
                  <i className="fa-regular fa-circle-user fa-2xl"></i>
                  <div className="flex flex-col">
                    <h1>Name</h1>
                    <p>email@mail.com</p>
                  </div>
                </div>
                <hr />
                <li className="text-graynav mt-2">
                  <a>
                    Sign out
                    <i
                      className="fa-solid fa-arrow-right-from-bracket"
                      onClick={hdlLogout}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Cart */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="m-1">
                <i className="fa-solid fa-cart-shopping text-lg pr-4 cursor-pointer"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-xl  bg-white  rounded-box w-[600px] z-50"
              >
                <div className="w-full flex justify-center flex-col">
                  <div className="px-6">
                    <h1 className="text-2xl font-medium text-graynav border-b-2 border-graynav mt-6 mb-6 pb-2">
                      Cart
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <div className=" bg-transparent rounded-3xl flex flex-col justify-between">
                      {/* Product */}
                      <div className="overflow-x-auto px-11 mb-1 ">
                        <div className="flex items-center space-x-3 rounded-md mt-2 mb-4">
                          <div className="avatar">
                            <div className="mask mask-square w-20 h-20 rounded-md border border-gray-200">
                              <img src={Drink} />
                            </div>
                          </div>
                          <div className="w-96">
                            <div className="font-medium text-lg text-graynav">
                              Eversweet Pro
                            </div>
                            <div className="text-sm opacity-60 text-graynav">
                              4,500 THB
                            </div>
                          </div>
                          <div>
                            <div className="bg-white border border-gray-400 px-4 py-1 rounded-md text-graynav font-normal text-sm text-center">
                              1
                            </div>
                            <p className="text-xs mt-1 underline text-gray-500 cursor-pointer">
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-between border-b border-gray-300 w-[528px] pb-4">
                          <p className="text-xl font-medium text-graynav ">
                            Total
                          </p>
                          <p className="text-xl font-medium text-graynav">
                            4,500 THB
                          </p>
                        </div>
                        <button
                          className=" mt-5 mb-6 rounded-full text-white w-[528px] p-3.5 bg-graynav border border-graynav hover:bg-white hover:text-graynav hover:border hover:border-graynav "
                          type="submit"
                        >
                          CHECKOUT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
