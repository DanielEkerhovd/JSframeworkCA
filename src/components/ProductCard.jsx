import { NavLink } from "react-router-dom";

export function ProductCard(product) {
  return (
    <div>
      <div className="bg-white shadow-lg flex flex-col gap-5 rounded-sm">
        <img
          className="h-[180px] w-full object-cover rounded-t-sm"
          src={product.image.url}
          alt={product.image.alt ? product.image.alt : product.title}
        />

        <div className="flex flex-col px-5 py-5">
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <div className="flex gap-2">
            {product.price === product.discountedPrice ? (
              <p className="text-lg">${product.discountedPrice}</p>
            ) : (
              <>
                <p className="text-lg">${product.discountedPrice}</p>
                <div className="bg-red-500 w-10 flex items-center justify-center rounded-sm text-white">
                  Sale
                </div>
              </>
            )}
          </div>
        </div>
        <NavLink
          to={`/product/${product.id}`}
          className=" bg-heading text-white text-center rounded-sm w-full p-2"
        >
          View Product
        </NavLink>
      </div>
    </div>
  );
}
