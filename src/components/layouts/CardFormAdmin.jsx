import drink from "../../assets/Drink.jpeg";
import { Link } from "react-router-dom";

export default function CardFormAdmin({
  id,
  productName,
  price,
  description,
  quantity,
  handleDelete,
  mainImg,
  descriptionImg,
  howtoImg,
}) {
  // console.log(mainImg);

  return (
    <div className="w-80 ">
      <div className="w-80 relative">
        <a href="#" className="">
          <img
            alt="Art"
            src={mainImg}
            className=" mask mask-square h-80 w-80 object-cover border border-gray-300 rounded-2xl"
          />
          <button className="absolute right-7 top-6 hover:text-graynav">
            <i
              className="fa-solid fa-xmark fa-lg"
              id={id}
              onClick={handleDelete}
            ></i>
          </button>
        </a>
      </div>
      <h3 className="mt-8 text-2xl font-medium text-gray-900 sm:text-xl">
        {productName}
      </h3>
      <p className="mt-2 max-w-sm text-gray-700 text-sm font-light h-16">
        {description}
      </p>
      <p className="mt-6 max-w-sm text-gray-700 text-base font-normal" id={id}>
        {price} THB
      </p>
      <div className="flex justify-between ">
        <p className="mt-2 max-w-sm text-gray-700 text-lg font-semibold">
          Quantity: {quantity}
        </p>
        <p className="mt-2 max-w-sm text-gray-700 text-lg font-semibold underline cursor-pointer hover:text-gray-500 pr-2">
          <Link to={`/admin/adminedit/${id}`}>Edit</Link>
        </p>
      </div>
    </div>
  );
}
