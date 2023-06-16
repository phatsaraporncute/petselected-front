import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardFormAdmin from "../components/layouts/CardFormAdmin";
import { getAllProduct } from "../api/authApi";
import { deleteProduct } from "../api/authApi";
import SidebarAdmin from "../components/SidebarAdmin";

export default function AdminProducts() {
  const [product, setProduct] = useState([]);
  const [productImage, setImage] = useState([]);

  const handleDelete = (e) => {
    let id = e.target.id;
    let token = localStorage.getItem("token");
    deleteProduct(id, token).then((rs) => {
      if (rs.data > 0) {
        const deleteIndex = product.findIndex((el) => el.id == id);
        const newProduct = [...product];
        newProduct.splice(deleteIndex, 1);
        setProduct(newProduct);
      }
    });
  };

  const Cards = product.map((product) => {
    return (
      <CardFormAdmin
        key={product.id}
        id={product.id}
        productName={product.productName}
        price={product.price}
        description={product.description}
        quantity={product.quantity}
        handleDelete={handleDelete}
        mainImg={product.ProductImages[0]?.mainImg}
        descriptionImg={product.ProductImages[0]?.descriptionImg}
        howtoImg={product.ProductImages[0]?.howtoImg}
      />
    );
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    getAllProduct(token).then((rs) => {
      setProduct(rs.data);
      const prepare = rs.data.map((e) => e.ProductImages[0]);
      console.log(prepare);
    });
  }, []);

  return (
    <div className="bg-white ">
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

            {/* Card */}
            <div className="w-full bg-transparent px-20 py-16 grid grid-flow-row grid-cols-3 gap-11 pb-16 ">
              {Cards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
