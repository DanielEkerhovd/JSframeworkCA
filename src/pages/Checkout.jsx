import { NavLink } from "react-router";

export function Checkout() {
  
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold ">Checkout</h1>
        <div className="flex flex-col gap-2 justify-center mt-10">
          <h1 className="text-2xl font-semibold">
            Thank you for your purchase!
          </h1>
        </div>
        <NavLink
          to="/"
          className="bg-heading text-white rounded-sm p-2 sm:max-w-[200px] hover:bg-black hover:text-white transition text-center"
        >
          Continue shopping
        </NavLink>
      </div>
    </div>
  );
}
