import { useParams } from "react-router-dom";
import { useApi } from "../api/useApi";
import apiPath from "../api/paths.json";
import { ProductDetails } from "../components/ProductDetails";

export function Product() {
  const { id } = useParams();
  const { content, isLoading, isError } = useApi(apiPath.base + id);
  const product = content.data;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Failed to fetch data</p>}
      {product && <ProductDetails {...product} />}
    </>
  );
}
