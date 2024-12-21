import { useCart } from "../hooks/Cart";

export function CartDetails() {
  const { cart, addToCart, removeToCart, clearToCart } = useCart();

  return (
    <div>
      <div className="flex flex-col justify-center gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center md:items-end gap-10 justify-center "
          >
            <img
              className="max-h-[150px] md:max-h-[250px] w-full object-cover object-center rounded-sm"
              src={item.image.url}
              alt={item.image.alt}
            />
            <div className="flex flex-col gap-2 md:w-1/2">
              <h1 className="font-bold text-lg">{item.title}</h1>
              <div className="flex gap-2 mb-5">
                <p className="text-lg font-semibold">${item.discountedPrice}</p>
                {item.discountedPrice !== item.price && (
                  <span className="px-2 flex items-center justify-center bg-red-500 font-semibold rounded-sm text-white">
                    {Math.floor(
                      ((item.discountedPrice - item.price) / item.price) * 100
                    )}
                    %
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-end gap-2">
                <div className="grid grid-cols-3 items-center gap-5">
                  <button
                    className="bg-heading rounded-sm text-xl py-1 px-3"
                    onClick={() => removeToCart(item)}
                  >
                    -
                  </button>
                  <span className="flex items-center justify-center">
                    {item.amount}
                  </span>
                  { item.amount < 50 && <button
                    className="bg-heading rounded-sm text-xl py-1 px-3"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>}
                </div>
                <button
                  className="bg-black text-white rounded-sm p-2"
                  onClick={() => clearToCart(item)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
