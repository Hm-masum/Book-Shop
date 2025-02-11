import { TProduct } from "../../type/product.type";
import image from "../../assets/cart3.jpg";
import ButtonBig from "../common/ButtonBig";
import { HiOutlineHeart } from "react-icons/hi";
import "../../App.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: TProduct) => {
  const { _id, title, author, price, inStock } = product;
  return (
    <div className="space-y-3 rounded-lg shadow-xl">
      <div className="relative">
        <img
          src={image}
          className="rounded-lg h-[350px] md:h-[250px] w-full"
          alt=""
        />
        <div className="rounded-full p-2 absolute hover:bg-slate-200 bg-white top-3 right-2 primary-color flex items-center justify-center">
          <HiOutlineHeart className="text-3xl font-semibold text-red-500" />
        </div>

        <div className="absolute bottom-7 left-0">
          {inStock == true ? (
            <p className="rounded-r-full  p-2 px-4 bg-blue-100 text-blue-500 flex items-center justify-center">
              In Stock
            </p>
          ) : (
            <p className="rounded-r-full p-2 px-4 bg-red-100 text-red-500 flex items-center justify-center">
              Out of Stock
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1 px-4 font-bold">
        <h2 className="text-2xl font-title">{title}</h2>
        <p className="text-gray-600 font-title">Author : {author}</p>
        <p className="text-xl font-title">Price : {price} tk </p>
      </div>
      <div className="px-4 pb-7">
        <Link to={`/products/${_id}`}>
          <ButtonBig text={"Details"} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
