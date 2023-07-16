import drinkShop from "../assets/Drink-shop.jpg";
import CardFormUser from "../components/layouts/CardFormUser";
import Fun from "../assets/Fun.jpeg";
import { useEffect, useState } from "react";
import { getAllProduct, updateCart } from "../api/authApi";

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Shop() {
  const [product, setProduct] = useState([]);
  const { user } = useAuth();

  const CardsUser = product.map((product) => (
    <CardFormUser
      key={product.id}
      id={product.id}
      productName={product.productName}
      price={product.price}
      quantity={product.quantity}
      description={product.description}
      mainImg={product.ProductImages[0]?.mainImg}
      descriptionImg={product.ProductImages[0]?.descriptionImg}
      howtoImg={product.ProductImages[0]?.howtoImg}
      userId={user?.id}
    />
  ));

  useEffect(() => {
    let token = localStorage.getItem("token");
    getAllProduct(token).then((rs) => {
      setProduct(rs.data);
    });
  }, []);

  return (
    <>
      <div>
        {/* Preview */}
        <div>
          <div className="flex flex-row">
            <div className="w-[70%] bg-gray-100 flex flex-col justify-center items-center">
              <div className="w-[450px] pl-6">
                <h1 className="text-graynav mb-7 font-semibold text-4xl">
                  DRINK
                </h1>
                <p className="text-graynav font-normal text-lg ">
                  First choice for drinking water: Unlock more delicious flavors
                  for the furry diet.
                </p>
              </div>
            </div>
            <img
              src={drinkShop}
              className="block object-cover h-[534.97px] w-full"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-row">
          <div className="flex flex-col justify-between border-none bg-white w-96 pl-16 pt-3">
            <div className="px-4 py-6 text-black">
              <ul className="mt-6 space-y-1">
                <li className="px-4 py-2 text-lg font-medium border-b border-graynav mb-3 pb-4">
                  COLLECTION
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
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
                    className="block rounded-lg px-4 py-2  font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
                  >
                    Feed
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2  font-normal text-graynav hover:bg-gray-100 hover:text-gray-700"
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

                {/* POPULAR */}
                <li className="px-4 py-2 text-lg font-medium border-b border-graynav mb-3 pb-4">
                  POPULAR PRODUCTS
                </li>
                <div className="overflow-x-auto">
                  <div className="flex items-center space-x-3  hover:bg-gray-100 hover:text-gray-700 rounded-md p-2 px-3 pl-4 mt-2">
                    <div className="avatar">
                      <div className="mask mask-square w-14 h-14 rounded-md border border-gray-200">
                        <img src={Fun} />
                      </div>
                    </div>
                    <div>
                      <div className="font-norma text-lg">PETTOY X</div>
                      <div className="text-xs opacity-50">1,500 THB</div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/* ProductCard */}
          <div className="w-full bg-white px-20 py-16 grid grid-flow-row grid-cols-3 gap-11 pb-16 ">
            {CardsUser}
            {/* <div className="w-80 ">
              <div className="w-80 relative hover:scale-105 duration-500 ">
                <Link to="/product">
                  <img
                    alt="Art"
                    src={drink}
                    className=" mask mask-square h-80 w-80 object-cover border border-gray-300 rounded-2xl"
                  />
                  <button className="absolute right-8 bottom-8 rounded-full bg-graynav text-textnav px-4 py-3 hover:bg-white hover:text-graynav hover:border hover:border-black">
                    Add to cart
                  </button>
                </Link>
              </div>
              <h3 className="mt-8 text-2xl font-medium text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
              </h3>
              <p className="mt-2 max-w-sm text-gray-700 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam.
              </p>
              <p className="mt-6 max-w-sm text-gray-700 text-lg font-semibold">
                2,300 THB
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
