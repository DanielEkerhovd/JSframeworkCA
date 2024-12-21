import { CartDetails } from "../components/CartDetails";
import { useCart } from "../hooks/Cart";

import { NavLink } from "react-router-dom";

export function Cart() {
  const { getTotal, resetCart } = useCart();

  const price = getTotal();


  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-semibold my-5">Cart</h1>
      <CartDetails />
      {price == 0 ? (
        <h1 className="text-2xl font-semibold">Your cart is empty, go <NavLink to="/" className="bg-heading text-white rounded-sm p-2 hover:bg-black hover:text-white transition">shopping !</NavLink></h1>
      ) : (
        <div className="flex flex-col gap-2 justify-center mt-10">
          <h1 className="text-2xl font-semibold">Total: ${price}</h1>
          <NavLink onClick={() => resetCart()} to="../checkout" className="bg-black text-white py-2 px-4 md:w-[200px] flex items-center justify-center">
            Checkout
          </NavLink>
        </div>
      )}
    </div>
  );
}
