import { Link, NavLink } from "react-router-dom";

import { useCart } from "../hooks/Cart";

export function Navbar() {
  const { cart } = useCart();

  const cartAmount = cart.reduce((acc, item) => acc + item.amount, 0);

  

  return (
    <header className="mx-auto w-full max-w-screen-2xl bg-heading px-5 py-4 md:text-xl flex items-center justify-between rounded-b-sm text-white">
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to="/cart"
        className="bg-white rounded-full flex items-center justify-center p-2 relative"
      >
        <img className="size-8" src="/media/icons/shoppingcart.svg" alt="" />
        <div className="absolute text-sm size-7 border-2 border-heading  bg-white rounded-full -bottom-2 -right-2 text-black flex items-center justify-center font-bold">
          {cartAmount <= 99 ? cartAmount : "99+"}
        </div>
      </Link>
    </header>
  );
}
