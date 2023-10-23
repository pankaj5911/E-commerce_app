import React from "react";
import { logo } from "../assets/index";
import { payment } from "../assets/index";
import {BsPaypal} from "react-icons/bs"
import {MdAccountCircle} from "react-icons/md"
import {BiCurrentLocation} from "react-icons/bi"
import {BiSolidHelpCircle} from "react-icons/bi"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32 invert" src={logo} alt="logoDark" />
          <p className="text-white text-sm tracking-wide">ReactBD.com</p>
          <img className="w-56" src={payment} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
        <h2 className="text-2xl  font-semibold text-white mb-4">locate us</h2>
        <div className="text-base flex flex-col gap-2">
            <p>MBD, Ruwi, MUscat-Oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 24769821</p>
            <p>e-mail: bazar@gmail.com</p>
        </div>
        </div>

        <div>
        <h2 className="text-2xl  font-semibold text-white mb-4">Profile</h2>
        <div className="flex flex-col gap-2 text-base">
        <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"> <span><MdAccountCircle/></span>{" "}my account</p>
        <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"> <span><BsPaypal/></span>{" "}checkout</p>
        <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"> <span><BiCurrentLocation/></span>{" "}order tracking</p>
        <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"> <span><BiSolidHelpCircle/></span>{" "}help & support</p>
        </div>
        </div>

        <div className="flex flex-col justify-center">
            <input className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder="Email" />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default Footer;
