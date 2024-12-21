import { useCart } from "../hooks/Cart";

export function ProductDetails(product) {
  // let savedCart = getLocalStorage("cart");
  const { cart, addToCart, removeToCart, clearToCart } = useCart();

  const currentCart = cart.find((item) => item.id === product.id);
  const cartAmount = currentCart ? currentCart.amount : 0;

  return (
    <div className="lg:mt-5 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-5">
        <img
          className="w-full h-[200px] lg:h-[450px] object-cover object-center rounded-sm"
          src={product.image.url}
          alt={product.image.alt}
        />
        <div className="w-11/12 mx-auto max-w-screen-2xl flex flex-col justify-end gap-5 mt-5">
          <h1 className="font-bold text-2xl lg:text-3xl uppercase">
            {product.title}
          </h1>
          <div>
            <p className="text-lg lg:text-xl">{product.description}</p>
            {product.discountedPrice === product.price ? (
              <p className="text-lg font-semibold">
                ${product.discountedPrice}
              </p>
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold lg:text-xl">
                  ${product.discountedPrice}
                </p>
                <span className="p-2 bg-red-500 font-semibold rounded-sm text-white">
                  {Math.floor(
                    ((product.discountedPrice - product.price) /
                      product.price) *
                      100
                  )}
                  %
                </span>
              </div>
            )}
          </div>
          {cartAmount === 0 ? (
            <button
              // onClick={() => dispatch({ type: "add" })}
              onClick={() => addToCart({ ...product })}
              className="bg-black text-white py-2 px-4 max-w-[300px]"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col max-w-[300px] gap-2 relative">
              <div className="grid grid-cols-3">
                <button
                  // onClick={() => dispatch({ type: "remove" })}
                  onClick={() => removeToCart({ ...product })}
                  className="bg-heading  rounded-sm text-xl py-1"
                >
                  -
                </button>
                <span className="flex items-center justify-center font-bold">
                  {currentCart.amount}
                </span>
                {cartAmount < 50 ? (
                  <button
                    // onClick={() => dispatch({ type: "add" })}
                    onClick={() => addToCart({ ...product })}
                    className="bg-heading  rounded-sm text-xl py-1"
                  >
                    +
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
              <button
                className="bg-black text-white rounded-sm py-2 px-4"
                onClick={() => clearToCart({ ...product })}
              >
                Remove from cart
              </button>
            </div>
          )}
        </div>
      </div>
      {product.reviews && product.reviews.length > 0 && (
        <div className="w-11/12 mx-auto max-w-screen-2xl mt-10">
          <h2 className="font-semibold text-lg">Reviews</h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
            {product.reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{review.username}</h3>
                <div className="flex items-center gap">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i}
                      src={
                        review.rating > i
                          ? "/media/icons/star.svg"
                          : "/media/icons/star-black.svg"
                      }
                      className="size-5"
                    ></img>
                  ))}
                </div>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
