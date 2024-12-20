import { COMPANY_LOGO } from "../utils/constants";
import Button from "./Button";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="h-auto w-[200px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between border border-red-500">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-md"
          onError={(e) => (e.target.src = COMPANY_LOGO)}
        />
      </div>

      <div className="mt-3 text-center">
        <h2 className="font-bold text-lg text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{`${price} USD`}</p>
      </div>

      <div className="mt-4 flex justify-center">
        <Button btnName={"View Product"} className="w-full" />
      </div>
    </div>
  );
};

export default ProductCard;
