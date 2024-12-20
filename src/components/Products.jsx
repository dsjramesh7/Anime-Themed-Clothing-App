import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "product1.jpg",
      name: "Naruto Hoodie",
      price: 29.99,
    },
    {
      id: 2,
      image: "product2.jpg",
      name: "Attack on Titan T-Shirt",
      price: 19.99,
    },
    {
      id: 3,
      image: "product3.jpg",
      name: "One Piece Cap",
      price: 15.99,
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products && products.length > 0 ? (
          products.map((singleProduct) => (
            <ProductCard
              key={singleProduct.id}
              title={singleProduct.name}
              price={singleProduct.price}
              image={singleProduct.image}
            />
          ))
        ) : (
          <p>No Products here</p>
        )}
      </div>
    </>
  );
};

export default Products;
