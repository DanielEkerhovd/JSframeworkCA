import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="mx-auto w-11/12 max-w-screen-2xl bg-heading px-5 font-heading py-4 md:text-xl flex items-center justify-between rounded-b-sm text-white">
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
      <div>
        <div className="size-8">
          <img className="" src="./media/icons/shoppingcart.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
