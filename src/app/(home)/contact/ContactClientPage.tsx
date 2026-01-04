"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursror-context/CursorContext";
import ContactForm from "@/components/custom/ContactForm";
import { Map } from "lucide-react";
import Image from "next/image";
const ContactClientPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="
      min-h-screen 
      lg:h-screen
      pt-[25vh] sm:pt-[20vh] lg:pt-[10vh] max-lg:pb-10
      globalSidePadding
      overflow-hidden flex lg:items-center h-full 
          bg-secondary-default/100
      " 

    >
      {/* PARENT START  */}
      <div className="
      flex flex-col gap-12 lg:flex-row
        max-lg:justify-center!
         lg:items-center  w-full max-w-full h-full"
         >



        {/*TEXT CONTAINER START */}
        <motion.div
// initial={{opacity:0, x:-60}}
// animate={{
//   opacity:1,x:0,
//   transition:{
//     delay:2,
//     duration:0.8,
//     ease:'easeInOut'
//   }
// }}
onMouseEnter={mouseEnterHandler}
onMouseLeave={mouseLeaveHandler}
className="flex-1"
        
        
        >
          <h3 className="h3 mb-8 text-center lg:text-left ">Contact Info </h3>

          <div className="flex flex-col items-start gap-12 ">

          {/* ITEMS-1 START */}
          <div className="flex items-start gap-4">

            <div
             className="relative
              w-[36px] 
              h-[36px]"
             >
              <Image 
              src={"/assets/contact/pin.svg"}
              alt="item-1"
              quality={100}
              fill 
              objectFit="contain"
              className="w-full h-full"
              />
            </div>

            <div className=" flex-1">
              <h4 className="h4 leading-[.95] mb-2 font-semibold text-accent-default">
                Address
              </h4>
              <p className="leading-relaxed lead ">
                4827 Willow Creek Blvd, Suite 410
                <br />
                Los Angeles, CA 90017
              </p>
            </div>
          </div>
          {/* ITEMS-1 END */}

          {/* ITEMS-2 START */}
          <div className="flex items-start gap-4">
            <div
             className="relative
              w-[36px] 
              h-[36px]"
             >
              <Image 
              src={"/assets/contact/phone.svg"}
              alt="item-1"
              quality={100}
              fill 
              objectFit="contain"
              className="w-full h-full"
              />
            </div>

            <div className=" flex-1">
              <h4 className="h4 leading-[.95] mb-2 font-semibold text-accent-default capitalize">
                Phone Number
              </h4>
              <div className="leading-relaxed lead ">
                <p>Phone: +99(0) 999 333 666 </p>
                <p>Fax: +99(0) 999 888 111 </p>
              </div>
            </div>
          </div>
          {/* ITEMS-2 END */}

          {/* ITEMS-3 START */}
          <div className="flex items-start gap-4">

            <div
             className="relative
              w-[36px] 
              h-[36px]"
             >
              <Image 
              src={"/assets/contact/email.svg"}
              alt="item-1"
              quality={100}
              fill 
              objectFit="contain"
              className="w-full h-full"
              />
            </div>

            <div className=" flex-1">
              <h4 className="h4 leading-[.95] mb-2 font-semibold text-accent-default">
                Email Address
              </h4>
              <div>
              <p className="leading-relaxed lead "> info@serene.com</p>
              <p className="leading-relaxed lead ">support@serene.com</p>
              </div>
            </div>
          </div>
          {/* ITEMS-3 END */}


      


          </div>


        </motion.div>
        {/*TEXT CONTAINER END */}




        {/*FORM CONTAINER START */}
        <motion.div
//         initial={{opacity:0, x:60}}
// animate={{
//   opacity:1,x:0,
//   transition:{
//     delay:2.4,
//     duration:0.8,
//     ease:'easeInOut'
//   }
// }}
onMouseEnter={mouseEnterHandler}
onMouseLeave={mouseLeaveHandler}
        className="  flex-1 "
        >

          <div
           className="bg-accent-100
            lg:max-w-[580px] w-full gap-4  p-10 mx-auto xl:mx-0 ">

        <ContactForm />
          </div>
        </motion.div>

        {/*FORM CONTAINER END */}
      </div>
      {/* PARENT END  */}
    </motion.div>
  );
};

export default ContactClientPage;
