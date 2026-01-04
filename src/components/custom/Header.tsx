"use client";

import { useCursor } from "@/context/cursror-context/CursorContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <motion.header
      className="  
        xl:!pb-[30px]
             fixed z-50  w-full max-w-full
             bg-secondary-default/100"
      //xl:bg-transparent
      // xl:!pb-[50px]
    >
      {/*TOP BAR START */}
      <div
        className=" xl:h-[50px]
         bg-accent-default  w-full 
         py-4 xl:py-0  flex items-center "
      >
        <div
          className="w-full max-w-full 
              flex items-center  justify-between globalSidePadding"
        >
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" flex flex-row
                 items-center
                 h-full gap-2 xl:gap-6 justify-between 
                w-full lg:w-auto lg:justify-normal "
          >
            <div className="flex items-center gap-2 text-white">
              <FaPhoneAlt />
              <span>+91 96454765070 </span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <IoMdMail />
              <span>info@serene.com</span>
            </div>

          </motion.div>

          {/*SOCIALS START */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden lg:block "
          >
            <Socials containerStyle={"flex gap-6 items-center text-white"} />
          </motion.div>
          {/*SOCIALS END */}
        </div>
      </div>
      {/*TOP BAR END */}

      {/*logo details start */}
      <div
        className="py-[15px] mx-auto w-full
         max-w-full globalSidePadding 
         flex flex-col 
           "
      >
        <div className=" flex items-center justify-between  ">
          {/*LOGO START */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            id="logo"
            className=""
          >
            <Link href={"/"}>
              <Image
                priority
                src={"/assets/logo.svg"}
                alt="application-logo"
                width={120}
                height={44}
              />
            </Link>
          </div>
          {/*LOGO END */}

          {/*MOBILE NAV BAR START */}
          <div
            className=" xl:hidden  cursor-pointer "
            //    className="   cursor-pointer "
          >
            <AiOutlineMenu
              onClick={() => setMobileNav(!mobileNav)}
              className="text-3xl text-primary-default"
            />
          </div>

          {/*MOBILE NAV START */}
          <motion.div
            initial={{ right: "-100%" }}
            animate={{
              right: mobileNav ? 0 : "-100%",
            }}
            exit={{ right: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className=" fixed bg-primary-default
   top-0 bottom-0 right-0 max-w-[300px] w-full
   z-50
   "
          >
            <MobileNav closeFn={() => setMobileNav(false)} />
          </motion.div>
          {/*MOBILE NAV END */}

          {/*MOBILE NAV BAR END */}

          {/*DESKTOP NAV START */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="xl:block hidden"
          >
            <Nav />
          </motion.div>
          {/*DESKTOP NAV END */}
        </div>
      </div>
      {/*logo details end */}
    </motion.header>
  );
};
export default Header;

// className="flex items-center justify-between px-4 pt-6 pb-6
//  xl:pb-[50px] fixed z-50 w-full max-w-full
//   bg-accent-100 xl:bg-transparent"
