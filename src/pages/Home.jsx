import { useApi } from "../api/useApi";
import apiPath from "../api/paths.json";
import { ProductCard } from "../components/ProductCard";

import { useState, useEffect } from "react";

export function Home() {
  const { content, isLoading, isError } = useApi(apiPath.base);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (content?.data) {
      setFilteredProducts(content.data);
    }
  }, [content?.data]);

  const handleSearch = (searchTerm) => {
    const search = searchTerm.toLowerCase();
    const filtered = content?.data?.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <h1 className="font-semibold text-3xl my-10 uppercase text-center">
        Products
      </h1>
      {/* Searchbar */}
      <div className="flex w-11/12 mx-auto gap-5 my-5">
        <input
          type="text"
          onInput={(e) => handleSearch(e.target.value)}
          placeholder="Search for products"
          className="p-2 rounded-lg border-2 border-black md:max-w-[500px] grow coolshadow"
        />
        <button className="bg-heading text-white p-2 rounded-sm">Search</button>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to fetch data</p>}
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
      </section>
    </>
  );
}
