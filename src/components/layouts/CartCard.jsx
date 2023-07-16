import { useParams } from "react-router-dom";
import { deleteCartById } from "../../api/authApi";

export default function CartCard({
  productName,
  price,
  quantity,
  userId,
  productId,
  mainImg,
  cartId,
  render,
  setRender,
  setTotal,
  totalPrice,
}) {
  // console.log(cartId);

  const hdlDelete = (e) => {
    let token = localStorage.getItem("token");
    deleteCartById(cartId, token).then((rs) => {
      // console.log(rs);
      setRender(!render);
      console.log(totalPrice, price);
      // console.log(totalPrice, price);
      setTotal((prev) => prev - price);
    });
  };

  return (
    <div className="overflow-x-auto px-11 mb-1 ">
      <div className="flex items-center space-x-3 rounded-md mt-2 mb-4">
        <div className="avatar">
          <div className="mask mask-square w-20 h-20 rounded-md border border-gray-200">
            <img src={mainImg} />
          </div>
        </div>
        <div className="w-96">
          <div className="font-medium text-lg text-graynav">{productName}</div>
          <div className="text-sm opacity-60 text-graynav">{price} THB</div>
        </div>
        <div>
          <div className="bg-white border border-gray-400 px-4 py-1 rounded-md text-graynav font-normal text-sm text-center">
            {quantity}
          </div>
          <p
            className="text-xs mt-1 underline text-gray-500 cursor-pointer hover:text-graynav"
            onClick={hdlDelete}
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
}
