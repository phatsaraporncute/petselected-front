import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/authApi";
import { Link } from "react-router-dom";

import Drink from "../assets/Drink.jpeg";

import ever01 from "../assets/ever01.jpg";
import ever02 from "../assets/ever02.jpg";

export default function AdminAdd() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    productName: "",
    description: "",
    price: "",
    size: "",
    weight: "",
    material: "",
    quantity: "1",
    categoryId: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleOnClickIncrease = () => {
    setInput({ ...input, quantity: +input.quantity + 1 });
  };

  const handleOnClickDecrease = () => {
    if (input.quantity > 0) {
      setInput({ ...input, quantity: +input.quantity - 1 });
    }
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    let token = localStorage.getItem("token");
    addProduct(input, token).then((rs) => {
      console.log(rs);
      navigate("/admin/adminproducts");
    });
  };
  return (
    <div className="bg-white">
      <div className="w-full">
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
                    + Add product
                  </li>
                </ul>
              </div>
            </div>

            {/* Edit Side */}
            <div className="w-full px-24 py-14 pb-16 ">
              <h1 className="text-graynav font-medium text-3xl mb-10 pl-10">
                Add product
              </h1>

              <div className="flex flex-row justify-center gap-32">
                {/* Left */}
                <form className="text-graynav" onSubmit={hdlSubmit}>
                  <div className="flex flex-row justify-center gap-20 w-[90%]">
                    <div className="w-[300px] h-[300px]">
                      <img
                        src={Drink}
                        className="mask mask-square rounded-3xl object-contain"
                      />
                      <p className="font-light text-graynav mb-3 mt-8">
                        Quantity :
                      </p>
                      <div className="flex items-center border w-36 border-gray-400 rounded-full">
                        <button
                          type="button"
                          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                          onClick={handleOnClickDecrease}
                        >
                          &minus;
                        </button>

                        <input
                          type="number"
                          id="Quantity"
                          name="quantity"
                          onChange={hdlChangeInput}
                          value={input.quantity}
                          className="h-10 w-16 border-transparent text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        <button
                          type="button"
                          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                          onClick={handleOnClickIncrease}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="w-[500px]">
                      <input
                        type="text"
                        placeholder="Product Name"
                        name="productName"
                        onChange={hdlChangeInput}
                        value={input.productName}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                      <input
                        type="text"
                        placeholder="Product description..."
                        name="description"
                        onChange={hdlChangeInput}
                        value={input.description}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                      <input
                        type="text"
                        placeholder="Product size"
                        name="size"
                        onChange={hdlChangeInput}
                        value={input.size}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                      <input
                        type="text"
                        placeholder="Product weight"
                        name="weight"
                        onChange={hdlChangeInput}
                        value={input.weight}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                      <input
                        type="text"
                        placeholder="Product material"
                        name="material"
                        onChange={hdlChangeInput}
                        value={input.material}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                      <select
                        id="status"
                        name="categoryId"
                        onChange={hdlChangeInput}
                        value={input.categoryId}
                        className=" block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6"
                      >
                        <option value="1">Clean</option>
                        <option value="2">Feed</option>
                        <option value="3">Drink</option>
                        <option value="4">Fun</option>
                        <option value="5">Accessories</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Price"
                        name="price"
                        onChange={hdlChangeInput}
                        value={input.price}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                    </div>
                  </div>

                  {/* Cover img */}
                  <div className=" flex flex-col justify-center items-center p-8  mt-16 w-[100%] pr-36">
                    <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Add
                    </p>
                    <div className=" rounded-xl  bg-gray-200 mb-20">
                      {/* <input type="file" /> */}
                      <img
                        src={ever01}
                        alt=""
                        className="rounded-xl mask h-[300px] object-contain "
                      />
                    </div>

                    <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Add
                    </p>
                    <div className=" rounded-xl  bg-gray-200">
                      {/* <input type="file" /> */}
                      <img
                        src={ever02}
                        alt=""
                        className="rounded-xl mask object-contain h-[300px] "
                      />
                    </div>

                    {/* Button */}
                    <div className="flex- flex-row mt-12 ">
                      <button
                        className="mt-10 rounded-full text-graynav bg-white border border-black w-32 h-11 mr-5"
                        type="submit"
                      >
                        Add
                      </button>
                      <button className="mt-10 rounded-full text-white bg-graynav border border-graynav w-32 h-11 ">
                        <Link className="/adminproducts">Cancel</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
