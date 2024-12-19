import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { COMPANY_LOGO } from "../utils/constants";
import { NavLink } from "react-router";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" w-full bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <div className="flex gap-2 items-center">
            <img
              src={COMPANY_LOGO}
              alt="Company Logo"
              className="h-16"
              onError={(e) => (e.target.style.display = "none")}
            />
            <h1 className="text-red-600 font-bold text-3xl">
              Anime<span className="text-yellow-400">Styler</span>
            </h1>
          </div>
        </NavLink>
        <form className="flex items-center gap-4">
          <label htmlFor="search-input" className="sr-only">
            Search Products
          </label>
          <input
            id="search-input"
            type="text"
            className="p-2 border outline-none rounded-md w-80"
            placeholder="Search Products.."
          />
          <FaSearch className="cursor-pointer" size={24} aria-label="Search" />
        </form>
        <div className="flex gap-4 items-center">
          <NavLink to={"/cart"}>
            <FaShoppingCart size={24} aria-label="Cart" />
          </NavLink>
          <Button btnName={"Sign In"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
