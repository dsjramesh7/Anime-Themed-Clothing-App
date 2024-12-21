import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { COMPANY_LOGO } from "../utils/constants";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log("getId", productId);
  const product = {
    id: productId,
    title: "Naruto Hoodie",
    price: 29.99,
    description:
      "A hoodie featuring Naruto Uzumaki, the main character from Naruto.",
    image: COMPANY_LOGO,
  };

  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-96 h-auto object-cover rounded-md"
      />
      <h1 className="font-bold text-4xl">{product.id}</h1>
      <h2 className="text-3xl font-bold mt-6">{product.title}</h2>
      <p className="text-xl text-gray-500 mt-2">{`${product.price} USD`}</p>
      <p className="text-lg text-gray-700 mt-4">{product.description}</p>
      <Button btnName="Add to Cart" className="mt-6" />
    </div>
  );
};

export default ProductDetails;
