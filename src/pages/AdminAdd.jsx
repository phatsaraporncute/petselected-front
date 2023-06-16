import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addImage, addProduct } from "../api/authApi";
import { Link } from "react-router-dom";

import SidebarAdmin from "../components/SidebarAdmin";

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
  const [mainImg, setMainImg] = useState(null);
  const [descriptionImg, setDescriptionImg] = useState(null);
  const [howtoImg, setHowtoImg] = useState(null);
  const [reload, setReload] = useState(false);

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

  const hdlSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const categoryId = document.getElementById("status").value;
    const cloneInput = { ...input, categoryId: categoryId };
    console.log(cloneInput);

    const rsAddProduct = await addProduct(cloneInput, token);
    const productId = rsAddProduct.data.id;

    const formData = new FormData();

    if (mainImg && descriptionImg && howtoImg) {
      formData.append("mainImg", mainImg);
      formData.append("descriptionImg", descriptionImg);
      formData.append("howtoImg", howtoImg);
      let token = localStorage.getItem("token");
      setReload(true);
      const rsAdd1stImage = await addImage(productId, formData, token);
      console.log(rsAdd1stImage.data);
      setReload(false);
      navigate("/admin/adminproducts");
    }
  };

  return (
    <>
      {reload && (
        <div className="fixed w-full h-screen justify-center items-center flex">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      )}
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
                  Add product
                </h1>

                <div className="flex flex-row justify-center gap-32">
                  {/* Left */}
                  <form className="text-graynav" onSubmit={hdlSubmit}>
                    <div className="flex flex-row justify-center gap-20 w-[90%]">
                      <div className=" bg-white rounded-3xl">
                        <div className="bg-gray-100 w-[300px] h-[329px] rounded-3xl">
                          <input
                            type="file"
                            src={mainImg && URL.createObjectURL(mainImg)}
                            onChange={(e) => {
                              console.log(e.target.files);
                              if (e.target.files[0]) {
                                setMainImg(e.target.files[0]);
                              }
                            }}
                          />
                          <img
                            src={mainImg && URL.createObjectURL(mainImg)}
                            alt=""
                            className="mask mask-square rounded-3xl object-cover w-[300px] h-[300px]"
                          />
                        </div>

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
                        <textarea
                          className="block rounded-lg  border mb-5 border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                          rows="5"
                          name="description"
                          onChange={hdlChangeInput}
                          value={input.description}
                          placeholder="Product description..."
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
                    <div className=" flex flex-col justify-center items-center p-8  mt-16 w-[100%] pr-36 ">
                      {/* <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Add
                    </p> */}
                      <div className=" rounded-xl bg-gray-100 mb-16">
                        <input
                          type="file"
                          src={
                            descriptionImg &&
                            URL.createObjectURL(descriptionImg)
                          }
                          onChange={(e) => {
                            console.log(e.target.files);
                            if (e.target.files[0]) {
                              setDescriptionImg(e.target.files[0]);
                            }
                          }}
                        />
                        <img
                          src={
                            descriptionImg &&
                            URL.createObjectURL(descriptionImg)
                          }
                          alt=""
                          className="rounded-xl mask h-[300px] object-cover w-[750px]"
                        />
                      </div>

                      {/* <p className="w-full text-end pr-9 underline hover:text-graynav mb-3">
                      Add
                    </p> */}
                      <div className=" rounded-xl bg-gray-100">
                        <input
                          type="file"
                          src={howtoImg && URL.createObjectURL(howtoImg)}
                          onChange={(e) => {
                            console.log(e.target.files);
                            if (e.target.files[0]) {
                              setHowtoImg(e.target.files[0]);
                            }
                          }}
                        />
                        <img
                          src={howtoImg && URL.createObjectURL(howtoImg)}
                          alt=""
                          className="rounded-xl mask h-[300px] object-cover w-[750px]"
                        />
                      </div>

                      {/* Button */}
                      <div className="flex- flex-row mt-12 ">
                        {/* <Link to="/admin/adminproducts"> */}
                        <button
                          className="mt-10 rounded-full text-graynav bg-white border border-black w-32 h-11 mr-5"
                          type="submit"
                        >
                          Add
                        </button>
                        {/* </Link> */}
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
    </>
  );
}
