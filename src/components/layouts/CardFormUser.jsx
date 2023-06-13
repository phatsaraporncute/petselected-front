import drink from "../../assets/Drink.jpeg";
import { Link } from "react-router-dom";

export default function CardFormUser({ id, productName, price, description }) {
  return (
    <div className="w-80 ">
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
        {productName}
      </h3>
      <p className="mt-2 max-w-sm text-gray-700 text-sm font-light">
        {description}
      </p>
      <p className="mt-6 max-w-sm text-gray-700 text-lg font-semibold">
        {price}
      </p>
    </div>
  );
}
