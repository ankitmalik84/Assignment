import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 568) {
      setOpen(false);
    }
  }, []);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <h1 className="text-white text-[24px] font-bold">Merimed</h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
          {user == null && (
            <>
              <NavLink
                className="items-center gap-x-2 flex"
                to="#"
                onClick={setUser("user")}
              >
                <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </NavLink>

              <NavLink to="#">
                <button className="hidden md:block rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign up
                </button>
              </NavLink>
              <button
                className="relative md:hidden"
                onClick={() => setOpen(true)}
              >
                <div className=" ">
                  <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
                </div>
              </button>
              {open && (
                <div className="absolute mr-0 bg-black right-4 ">
                  <div className="border border-white px-1 mb-1">Login</div>
                  <div className="border border-white px-1">Signup</div>
                </div>
              )}
            </>
          )}
          {user != null && <ProfileDropdown user={user} state={setUser} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
