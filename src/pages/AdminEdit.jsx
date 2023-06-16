import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../api/authApi";
import { Link } from "react-router-dom";

import Drink from "../assets/Drink.jpeg";

import ever01 from "../assets/ever01.jpg";
import ever02 from "../assets/ever02.jpg";
import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [input, setInput] = useState({
    productName: "",
    description: "",
    price: "",
    size: "",
    weight: "",
    material: "",
    quantity: "",
    categoryId: "",
  });

  useEffect(() => {
    getProductById(id).then((rs) => {
      setInput(rs.data);
    });
  }, []);

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
    let token = localStorage.getItem("token");
    updateProduct(id, input, token).then((rs) => {
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
              <SidebarAdmin />
            </div>

            {/* Edit Side */}
            <div className="w-full px-24 py-14 pb-16 ">
              <h1 className="text-graynav font-medium text-3xl mb-10 pl-10">
                Edit product
              </h1>

              <div className="flex flex-row justify-center gap-32">
                {/* Left */}
                <form className="text-graynav " onSubmit={hdlSubmit}>
                  <div className="flex flex-row justify-center gap-20 w-[90%]">
                    <div className="w-[300px] h-[300px]">
                      <img
                        src={Drink}
                        className="mask mask-square rounded-3xl  object-contain"
                      />
                      <p className="font-light text-graynav mb-3 mt-8">
                        Quantity :
                      </p>
                      <div className="flex items-center border w-36 border-gray-400 rounded-full">
                        <button
                          type="button"
                          onClick={handleOnClickDecrease}
                          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                          &minus;
                        </button>

                        <input
                          type="number"
                          id="Quantity"
                          name="quantity"
                          onChange={hdlChangeInput}
                          value={input?.quantity}
                          className="h-10 w-16 border-transparent text-center bg-transparent text-graynav [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        <button
                          type="button"
                          onClick={handleOnClickIncrease}
                          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
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
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                        name="productName"
                        onChange={hdlChangeInput}
                        value={input?.productName}
                      />
                      <textarea
                        className="block rounded-lg  border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                        rows="5"
                        placeholder="Product description..."
                        name="description"
                        onChange={hdlChangeInput}
                        value={input?.description}
                      />
                      <input
                        type="text"
                        placeholder="Product size"
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                        name="size"
                        onChange={hdlChangeInput}
                        value={input?.size}
                      />
                      <input
                        type="text"
                        placeholder="Product weight"
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                        name="weight"
                        onChange={hdlChangeInput}
                        value={input?.weight}
                      />
                      <input
                        type="text"
                        placeholder="Product material"
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                        name="material"
                        onChange={hdlChangeInput}
                        value={input?.material}
                      />
                      <select
                        id="status"
                        name="status"
                        onChange={hdlChangeInput}
                        value={input?.categoryId}
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
                        value={input?.price}
                        className="block rounded-lg border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                      />
                    </div>
                  </div>

                  {/* Cover img */}
                  <div className=" flex flex-col justify-center items-center p-8  mt-16 w-[100%] pr-36">
                    <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Edit
                    </p>
                    <div className=" rounded-xl bg-gray-200 mb-20">
                      {/* <input type="file" /> */}
                      <img
                        src={ever01}
                        alt=""
                        className="rounded-xl mask object-contain h-[300px]"
                      />
                    </div>

                    <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Edit
                    </p>
                    <div className=" rounded-xl bg-gray-200">
                      {/* <input type="file" /> */}
                      <img
                        src={ever02}
                        alt=""
                        className="rounded-xl mask object-contain h-[300px]"
                      />
                    </div>

                    {/* Button */}
                    <div className="flex- flex-row mt-12 ">
                      <button
                        type="submit"
                        className="mt-10 rounded-full text-graynav bg-white border border-black w-32 h-11 mr-5"
                      >
                        Save
                      </button>
                      <Link to="/admin/adminproducts">
                        <button className="mt-10 rounded-full text-white bg-graynav border border-graynav w-32 h-11 ">
                          Cancel
                        </button>
                      </Link>
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
