import HeroSection from "../components/HeroSection";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="border border-red-500 flex flex-col justify-center mx-11">
      <HeroSection />
      <Products />
    </div>
  );
};

export default Home;
