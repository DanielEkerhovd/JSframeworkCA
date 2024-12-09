import { NavLink } from "react-router-dom";
import { useState } from "react";

export function ProductCard(product) {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <NavLink
        to={`/product/${product.id}`}
        className="bg-white shadow-lg flex flex-col gap-5 rounded-sm pb-5"
      >
        <img
          className="h-[120px] w-full object-cover rounded-t-sm"
          src={product.image.url}
          alt={product.image.alt ? product.image.alt : product.title}
        />

        <div className="flex flex-col px-5">
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <div className="flex gap-2">
            {product.price === product.discountedPrice ? (
              <p>{product.discountedPrice}</p>
            ) : (
              <>
                <p>{product.discountedPrice}</p>
                <div className="bg-red-500 w-10 text-center rounded-sm text-white">
                  Sale
                </div>
              </>
            )}
          </div>
        </div>
      </NavLink>
      <div className="w-full flex flex-col items-center gap-2">
        {amount == 0 ? (
          <button
            onClick={() => setAmount((amount) => amount + 1)}
            className="bg-heading text-white p-3 text-lg w-full rounded-b-sm"
          >
            Add to cart
          </button>
        ) : (
          <>
            <div className="grid grid-cols-3 w-full lg:w-3/5 mt-2">
              <button
                onClick={() => setAmount((amount) => amount - 1)}
                className="bg-heading py-1 w-full rounded-sm text-2xl flex items-center justify-center"
              >
                -
              </button>
              <span className="flex items-center justify-center">{amount}</span>
              {amount <= 49 ? (
                <button
                  onClick={() => setAmount((amount) => amount + 1)}
                  className="bg-heading w-full rounded-sm text-2xl flex items-center justify-center"
                >
                  +
                </button>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              <button onClick={() => setAmount(0)}>Remove from cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
