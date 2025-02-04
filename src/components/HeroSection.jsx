import { Hero_Image } from "../utils/constants";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-10 md:py-20">
      <div className="flex flex-col items-start text-center md:text-left max-w-2xl">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-red-500 leading-tight">
          Anime<span className="text-indigo-600">Styler</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
          Style that resonates with your <br className="hidden md:block" />
          favorite character.
        </p>
        <div className="mt-6">
          <Button btnName={"Shop Now"} />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={Hero_Image}
          alt="Anime character promoting AnimeStyler"
          className="h-64 md:h-96 lg:h-[550px] w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
