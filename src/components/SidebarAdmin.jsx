import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <div className=" py-2 text-black">
      <ul className="mt-6 space-y-1">
        <li className="px-4 py-2 text-lg font-medium border-b border-graynav mb-3 pb-4">
          COLLECTION
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2  font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
          >
            All
          </a>
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
          >
            Clean
          </a>
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
          >
            Feed
          </a>
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
          >
            Drink
          </a>
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
          >
            Fun
          </a>
        </li>
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700 mb-8"
          >
            Accessories
          </a>
        </li>
        {/* Add product */}
        <li className="px-4 py-2 text-lg font-medium border-t border-graynav mb-3 pb-4 hover:underline cursor-pointer pt-6">
          <Link to="/admin/adminadd">+ Add product</Link>
        </li>
      </ul>
    </div>
  );
}
