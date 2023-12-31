import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar bg-graynav text-textnav">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Pet Selected.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/admin/shop">shop</Link>
          </li>
          <li>
            <Link to="/admin/adminorder">order</Link>
          </li>
          <li>
            <Link to="/admin/adminproducts">products</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>

        {/* Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" m-1 mr-4">
            <i className="fa-solid fa-user text-lg cursor-pointer"></i>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-sm bg-white border-none rounded-box w-52 z-50"
          >
            <div className="flex flex-row text-graynav justify-center items-center gap-5 mb-3 mt-1">
              <i className="fa-regular fa-circle-user fa-2xl"></i>
              <div className="flex flex-col">
                <h1>
                  {user?.firstName} {user?.lastName}
                </h1>
                <p>{user?.email}</p>
              </div>
            </div>
            <hr />
            <li className="text-graynav mt-2 " onClick={hdlLogout}>
              <a>
                Sign out
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
