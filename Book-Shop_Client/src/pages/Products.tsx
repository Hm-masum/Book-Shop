import ProductCard from "../components/Product/ProductCard";
import { useGetAllProductsQuery } from "../redux/features/product/products.api";
import { TBook } from "../type/product.type";

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  console.log(products);
  if (isLoading) {
    console.log("...");
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products?.data?.map((product: TBook) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
