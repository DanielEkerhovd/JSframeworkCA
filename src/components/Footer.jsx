import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-heading text-white py-10">
      <div className="w-11/12 max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex flex-col justify-center gap-2">  
          <NavLink to="/" className="text-xl md:text-3xl font-coolTitle font-bold">
            ReactShop
          </NavLink>
          <span className="text-sm">© All rights reserved</span>
        </div>

        <div className="flex gap-5">
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </footer>
  );
}
