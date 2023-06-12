import drink from "../assets/Drink.jpeg";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  return (
    <div className="bg-white">
      <div className="w-full h-screen">
        <div className="px-16 py-12">
          {/* Header */}
          <h1 className="border-b border-gray-400 text-3xl font-medium text-graynav pb-3">
            Products
          </h1>
          {/* Sidebar */}
          <div className="flex flex-row">
            <div className="flex flex-col justify-between border-none w-72 pt-3">
              <div className=" py-2 text-black">
                <ul className="mt-6 space-y-1">
                  <li className="px-4 py-2 text-lg font-medium border-b border-graynav mb-3 pb-4">
                    COLLECTION
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                    >
                      Clean
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                    >
                      Feed
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                    >
                      Drink
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                    >
                      Fun
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-normal text-graynav hover:bg-gray-100 hover:text-gray-700 mb-8"
                    >
                      Accessories
                    </a>
                  </li>

                  {/* Add product */}

                  <li className="px-4 py-2 text-lg font-medium border-t border-graynav mb-3 pb-4 hover:underline cursor-pointer pt-6">
                    <Link to="/adminadd">+ Add product</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card */}
            <div className="w-full bg-transparent px-20 py-16 grid grid-flow-row grid-cols-3 gap-11 pb-16 ">
              <div className="w-80 ">
                <div className="w-80 relative">
                  <a href="#" className="">
                    <img
                      alt="Art"
                      src={drink}
                      className=" mask mask-square h-80 w-80 object-cover border border-gray-300 rounded-2xl"
                    />
                    <button className="absolute right-7 top-6 hover:bg-white hover:text-graynav">
                      <i className="fa-solid fa-xmark fa-lg"></i>
                    </button>
                  </a>
                </div>
                <h3 className="mt-8 text-2xl font-medium text-gray-900 sm:text-xl">
                  Lorem, ipsum dolor.
                </h3>
                <p className="mt-2 max-w-sm text-gray-700 text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni reiciendis sequi ipsam.
                </p>
                <p className="mt-6 max-w-sm text-gray-700 text-base font-normal">
                  4,500 THB
                </p>
                <div className="flex justify-between">
                  <p className="mt-2 max-w-sm text-gray-700 text-lg font-semibold">
                    Quantity: 23
                  </p>
                  <p className="mt-2 max-w-sm text-gray-700 text-lg font-semibold underline cursor-pointer hover:text-gray-500 pr-2">
                    <Link to="/adminedit">Edit</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
