import React, { useEffect, useState } from "react"; // Replace require with import
import Cards from "../../components/Cards"; // Replace require with import
import { Link } from "react-router-dom"; // Replace require with import

function Sbody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/shop/products");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // Check if the response is an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Products data is not an array:", data);
          setProducts([]); // Fallback to empty array
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
        setProducts([]); // Fallback to empty array in case of error
      }
    };
    getProducts();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Browse our wide range of products and find what you need today!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Chat
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default Sbody;
