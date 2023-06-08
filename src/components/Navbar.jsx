export default function Navbar() {
  return (
    <div className="navbar bg-graynav text-textnav">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Pet Selected.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>shop</a>
          </li>
          <li>
            <a>about us</a>
          </li>
          <li>
            <a>blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <i className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
        <i className="fa-solid fa-user text-lg cursor-pointer"></i>
        <i className="fa-solid fa-cart-shopping text-lg pr-4 cursor-pointer"></i>
      </div>
    </div>
  );
}
