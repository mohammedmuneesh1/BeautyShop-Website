"use client"




import { useCursor } from "@/context/cursror-context/CursorContext";
import {motion} from 'framer-motion'
import Image from "next/image";
import Link from "next/link";

const Header= ()=>{
    const  {mouseEnterHandler,mouseLeaveHandler} = useCursor();

    return(
        <motion.header
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="  pb-6
         xl:!pb-[50px]    fixed z-50  w-full max-w-full
            bg-red-500 xl:bg-transparent"

        >

        {/*TOP BAR START */}
        <div className="bg-secondary-default/100 mb-6 xl:mb-[50px] xl:h-[50px] w-full py-4 xl:py-0 ">
dfasdf
        </div>
        {/*TOP BAR END */}

        {/*logo details start */}
        <div className="p-[15px] mx-auto w-full max-w-full">
  

  {/*LOGO START */}
            <div
            id="logo"
            className="">
                <Link href={"/"}>
                <Image
                src={"/"}
                />

                
                </Link>

            </div>
  {/*LOGO END */}

        </div>
        {/*logo details end */}

adfasdfasdfasdfasfassadf
        </motion.header>
    )
}
export default Header;


        // className="flex items-center justify-between px-4 pt-6 pb-6
        //  xl:pb-[50px] fixed z-50 w-full max-w-full
        //   bg-accent-100 xl:bg-transparent"