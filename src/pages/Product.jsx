import Drink from "../assets/Drink.jpeg";
import ever01 from "../assets/ever01.jpg";
import ever02 from "../assets/ever02.jpg";
import { getProductById } from "../api/authApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const [mainImg, setMainImg] = useState(null);
  const [descriptionImg, setDescriptionImg] = useState(null);
  const [howtoImg, setHowtoImg] = useState(null);

  const [input, setInput] = useState({
    quantity: "1",
  });

  const handleOnClickIncrease = () => {
    setInput({ ...input, quantity: +input.quantity + 1 });
  };

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnClickDecrease = () => {
    if (input.quantity > 0) {
      setInput({ ...input, quantity: +input.quantity - 1 });
    }
  };

  useEffect(() => {
    getProductById(id).then((rs) => {
      setProduct(rs.data);
      setMainImg(rs.data.ProductImages[0].mainImg);
      setDescriptionImg(rs.data.ProductImages[0].descriptionImg);
      setHowtoImg(rs.data.ProductImages[0].howtoImg);
    });
  }, []);

  return (
    <div>
      {/* Product */}
      <div>
        <div className="text-sm breadcrumbs w-full pl-44 py-14">
          <ul className="text-graynav">
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Drink</a>
            </li>
            <li>Eversweet Pro</li>
          </ul>
        </div>

        {/* Left */}
        <div className="flex flex-row justify-center gap-28">
          <div className="w-[500px] h-[500px]">
            <img
              //   src={product?.ProductImages[0].mainImg}
              src={mainImg}
              className="mask mask-square rounded-3xl"
            />
          </div>

          {/* Right */}
          <div className="w-[500px]">
            <h1 className="text-4xl text-graynav font-medium mb-4">
              {/* EVERSWEET PRO */}
              {product?.productName}
            </h1>
            <p className="text-graynav font-light mb-7">
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              tempora quod. Rerum reiciendis sequi molestias quam qui, ea
              laborum officiis molestiae, natus magnam obcaecati. */}
              {product?.description}
            </p>
            <h2 className="text-xl font-medium text-graynav border-b border-gray-300 pb-6">
              {/* 4,500 THB */}
              {product?.price} THB
            </h2>
            <div className="mt-7 ">
              <p className="font-light text-graynav mb-3">Quantity :</p>
              <div className="flex justify-between">
                <div className="flex items-center border border-gray-400 rounded-full">
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

                <button className=" rounded-full w-36 bg-graynav text-white px-4 py-3 hover:bg-gray-800 ">
                  Add to cart
                </button>
              </div>

              {/* Product details */}
              <div className="flex flex-row">
                <div className="mr-20">
                  <p className="pt-10 py-4 text-graynav font-normal">
                    Product size
                  </p>
                  <p className="py-4 text-graynav font-normal">
                    Product weight
                  </p>
                  <p className="py-4 text-graynav font-normal">
                    Product material
                  </p>
                </div>
                <div className="">
                  <p className="pt-10 py-4 text-graynav font-light">
                    {/* 19.7 x 18.6 x 17.6in */}
                    {product?.size}
                  </p>
                  <p className="py-4 text-graynav font-light">
                    {/* 9.7 kg */}
                    {product?.weight}
                  </p>
                  <p className="py-4 text-graynav font-light">
                    {/* ABS, Tempered Glass */}
                    {product?.material}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pic inform */}
      <div className="bg-gray-200 flex flex-col justify-center items-center p-20 gap-10 mt-16">
        <div className="w-[90%] rounded-xl">
          <img src={descriptionImg} alt="" className="rounded-xl mask " />
        </div>
        <div className="w-[90%] h-[30%] rounded-xl">
          <img src={howtoImg} alt="" className="rounded-xl mask" />
        </div>
      </div>
    </div>
  );
}
