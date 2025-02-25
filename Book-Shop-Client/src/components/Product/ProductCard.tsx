import { TProduct } from "../../type/product.type";
import { HiOutlineHeart } from "react-icons/hi";
import "../../App.css";
import { Link } from "react-router-dom";
import ButtonSm from "../common/ButtonSm";

const ProductCard = ({ product }: TProduct) => {
  const { _id, title, author, price, inStock, category, image } = product;
  return (
    <div className="space-y-4 rounded-lg shadow-md hover:shadow-lg">
      <div className="relative">
        <img src={image} className="mx-auto h-[350px] md:h-[250px]" alt="" />
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

      <div className="px-4 font-semibold space-y-1">
        <h2 className="text-2xl font-title font-bold">{title}</h2>
        <p className="text-gray-600 font-title">Author : {author}</p>
        <div className=" flex items-center justify-between">
          <p className="text-xl font-title">Price : {price} tk </p>
          <p className="font-normal text-gray-500 font-title"> {category} </p>
        </div>
      </div>
      <div className="px-4 pb-5">
        <Link to={`/products/${_id}`}>
          <ButtonSm variant="outline" size="md" text={"View Details"} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
