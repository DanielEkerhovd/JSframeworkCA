import { useApi } from "../api/useApi";
import apiPath from "../api/paths.json";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  const { content, isLoading, isError } = useApi(apiPath.base);
  const products = content.data;
  return (
    <>
      <h1 className="font-semibold text-2xl my-10 uppercase text-center">
        Products
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to fetch data</p>}
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
      </section>
    </>
  );
}
