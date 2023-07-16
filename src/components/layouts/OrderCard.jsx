export default function OrderCard({ quantity, image, productName, price }) {
  return (
    <div className="flex items-center space-x-3 rounded-md mt-2 mb-4">
      <div className="avatar">
        <div className="mask mask-square w-20 h-20 rounded-md border border-gray-200">
          <img src={image} />
        </div>
      </div>
      <div className="w-96">
        <div className="font-medium text-lg text-graynav">{productName}</div>
        <div className="text-sm opacity-60 text-graynav">{price} THB</div>
      </div>
      <div className="bg-white border border-gray-400 px-4 py-1 rounded-md text-graynav font-normal text-sm">
        {quantity}
      </div>
    </div>
  );
}
