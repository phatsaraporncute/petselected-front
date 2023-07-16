import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Qrcode from "../assets/QRcode.png";
import { updateOrder, getOrderById, uploadSlip } from "../api/authApi";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import OrderCard from "../components/layouts/OrderCard";

export default function OrderPage() {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const defaultImg =
    "https://cdn.dribbble.com/users/644659/screenshots/4462435/media/7e64d6c2448dbe3e066db33e2730bd82.gif";

  const [input, setInput] = useState({
    address: "",
  });

  const [img, setImg] = useState("");
  const [file, setfile] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (user) {
      getOrderById(user?.id, token).then((rs) => {
        const Order = rs.data;
        const lastOrder = Order[Order.length - 1];
        setOrder(lastOrder);
      });
    }
  }, [user]);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", file);
    const rs = await uploadSlip(formData, token);
    const payload = { address: input.address, paymentSlip: rs.data };
    await updateOrder(order.id, payload, token);
    navigate("/");
  };

  return (
    <form onSubmit={hdlSubmit}>
      <div className="bg-white">
        <div>
          {/* banner */}
          <div className="h-[350px] w-full flex flex-col justify-center items-center bg-graynav border-t border-gray-500 ">
            <h1 className="text-4xl text-textnav mb-6">CHECKOUT</h1>
            <p className="w-[40%] text-center text-textnav font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              rerum voluptatibus accusamus alias nesciunt excepturi sed dicta
              saepe.
            </p>
          </div>

          <div className="flex flex-row justify-center px-16 py-10 gap-24 mt-6">
            {/* Left */}
            <div className="flex flex-col w-[45%] pl-12">
              <h1 className="text-2xl font-medium text-graynav border-b border-gray-400 p-5 mb-10">
                Payment
              </h1>
              <div className="flex flex-row mb-24">
                <div className="w-80">
                  <img src={Qrcode} alt="" className="" />
                  <p className="text-center">SCAN TO PAY</p>
                </div>

                <div className=" flex flex-col justify-center items-center ml-32 mt-7 ">
                  <input
                    type="file"
                    id="picture"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setImg(URL.createObjectURL(file));
                      setfile(file);
                    }}
                  />
                  <img
                    src={img || defaultImg}
                    alt=""
                    className="w-56 h-64 mask bg-gray-200 object-cover rounded-lg border border-gray-100"
                  />
                  <label htmlFor="picture">
                    <div className="rounded-full px-4 py-3 mt-8 bg-white text-graynav border border-black hover:bg-graynav hover:text-white ">
                      Upload Slip Here
                    </div>
                  </label>
                </div>
              </div>

              <h1 className="text-2xl font-medium text-graynav border-b border-gray-400 p-5 mb-8">
                Shipping address
              </h1>
              <div className="text-graynav">
                <div className="flex flex-col gap-4 mb-4">
                  {/* <input
                  type="text"
                  placeholder="Full Name"
                  className="block rounded-lg border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                /> */}
                  <textarea
                    name="address"
                    onChange={hdlChangeInput}
                    value={input?.address}
                    rows="5"
                    type="text"
                    placeholder="Address"
                    className="block rounded-lg resize-none border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                  />
                </div>
                {/* <div className="grid grid-flow-row grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="block rounded-lg border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                />
                <input
                  type="text"
                  placeholder="City"
                  className="block rounded-lg border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                />
                <input
                  type="text"
                  placeholder="State/Province"
                  className="block rounded-lg border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                />
                <input
                  type="text"
                  placeholder="Zip/Postal Code"
                  className="block rounded-lg border border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="block rounded-lg border mt-4  border-gray-400 font-light py-3.5 focus:ring-1 w-full  bg-white text-sm pl-6 "
              /> */}
              </div>
              <Link to="/shop">
                <button className="text-left mt-24 text-sm text-graynav hover:underline">
                  <i className="fa-solid fa-chevron-left mr-3"></i>
                  Back to shop
                </button>
              </Link>
            </div>
            {/* Right */}
            <div className="w-[40%] pl-12">
              <h1 className="text-2xl font-medium text-graynav  mt-6 mb-6 ">
                Order Summary
              </h1>
              <div className="flex min-h-[60%]">
                <div className="w-[550px] bg-gray-200 rounded-3xl flex flex-col justify-between">
                  {/* Product */}
                  <div className="overflow-x-auto px-11 py-7">
                    {order?.OrderItems?.map((el) => {
                      return (
                        <OrderCard
                          key={el.id}
                          image={el.Product?.ProductImages[0]?.mainImg}
                          productName={el.Product?.productName}
                          price={el.Product?.price}
                          quantity={el.quantity}
                        />
                      );
                    })}
                  </div>
                  {/* <div className="overflow-x-auto px-11 py-7">
                  <div className="flex items-center space-x-3 rounded-md mt-2 mb-4">
                    <div className="avatar">
                      <div className="mask mask-square w-20 h-20 rounded-md border border-gray-200">
                        <img src={Drink} />
                      </div>
                    </div>
                    <div className="w-96">
                      <div className="font-medium text-lg text-graynav">
                        Eversweet Pro
                      </div>
                      <div className="text-sm opacity-60 text-graynav">
                        4,500 THB
                      </div>
                    </div>
                    <div className="bg-white border border-gray-400 px-4 py-1 rounded-md text-graynav font-normal text-sm">
                      1
                    </div>
                  </div>
                </div> */}

                  <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-between border-b border-black w-[480px] pb-4">
                      <p className="text-xl font-medium text-graynav">Total</p>
                      <p className="text-xl font-medium text-graynav">
                        {order?.totalPrice} THB
                      </p>
                    </div>
                    <button
                      className=" mt-5 mb-6 rounded-full text-white w-[480px] p-3.5 bg-graynav border border-graynav hover:bg-white hover:text-graynav hover:border hover:border-graynav "
                      type="submit"
                    >
                      Placing Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
