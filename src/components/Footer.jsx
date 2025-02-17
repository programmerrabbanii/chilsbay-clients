import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logoimg from "../assets/logo.png";
import { AiFillGithub } from "react-icons/ai";
import pathner from "../assets/partner.png";
import { section } from "motion/react-client";
const Footer = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logoimg} alt="" />
          <p>Copyright 2022 © </p>
          <div className="flex mt-4">
            <FaFacebookF className="text-[#0E8BFF] text-2xl mr-2.5 cursor-pointer" />
            <FaTwitter className="text-[#0E8BFF] text-2xl mr-2.5 cursor-pointer" />
            <FaInstagram className="text-[#0E8BFF] text-2xl mr-2.5 cursor-pointer" />
            <FaLinkedinIn className="text-[#0E8BFF] text-2xl mr-2.5 cursor-pointer" />
            <AiFillGithub className="text-[#0E8BFF] text-2xl mr-2.5 cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="border-b-1 pb-8 capitalize font-semibold ">Menu</h4>
          <div className="flex gap-16">
            <div>
              <p>Home</p>
              <p>Eat</p>
              <p>Drink</p>
              <p>Event</p>
              <p>Club</p>
              <p>Recreation</p>
            </div>
            <div>
              <p>Blog</p>
              <p>Creaers</p>
              <p>Contact</p>
              <p>FQA</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="border-b-1 pb-8">Utility Pages</h4>
          <div>
            <p>Start Here</p>
            <p>Pay with Crypto</p>
            <p>Style Guide</p>
            <p>Password Protected</p>
            <p>404 Not Found</p>
            <p>Licenses</p>
            <p>Changelog</p>
          </div>
        </div>

        <div className="bg-[#F5FAFF] p-8 rounded-2xl ">
          <img src={pathner} alt="" />
          <h4>Become a Partner</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            pellentesque posuere.
          </p>
          <button className="bg-[#0E8BFF] w-full py-2 rounded-lg mt-2 text-white">
            Join Now
          </button>
        </div>
      </div>
      <p className="text-center text-lg mt-5">© 2025 DevRabbani. All rights reserved.</p>
    </section>
  );
};

export default Footer;
