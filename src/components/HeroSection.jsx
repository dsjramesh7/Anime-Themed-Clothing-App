import { Hero_Image } from "../utils/constants";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="flex flex-col justify-center gap-5 pl-6 py-4 md:py-10">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl animate-pulse">
          AnimeStyler
        </h1>
        <p className="text-xl md:text-3xl lg:text-5xl">
          Style That Resonates With Your Favourite Character
        </p>
        <Button btnName={"Shop Now"} />
      </div>
      <div className="flex justify-center">
        <img
          src={Hero_Image}
          alt="An anime character promoting AnimeStyler"
          className="h-72 md:h-96 lg:h-[700px]  object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
