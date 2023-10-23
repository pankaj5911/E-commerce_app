import React from "react";
import { cart, logo, login } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state)=> state.bazar.userInfo)
  console.log(userInfo)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link>
          <div to="/">
            <img className="w-32" src={logo} alt="logoImage" />
          </div>
        </Link>
        <div className="flex items-center gap-8 mx-10">
          <ul className="flex items-center gap-8">
            <li className="text-base test-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base test-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base test-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base test-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base test-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cart} alt="" />
              <span className="absolute  w-6 top-1.5 left-0 text-sm flex items-center justify-center font-semibold ">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo? userInfo.image: {login}} // have to make some chnages
              alt="loginImage"
            />
          </Link>
          {userInfo && <p className="text-base font-semibold underline underline-offset-2">{userInfo.name}</p> }
        </div>
      </div>
    </div>
  );
};

export default Header;
