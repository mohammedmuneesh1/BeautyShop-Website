"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  //eslint-disable-next-line 
}) as any;
// const ReactPlayer = dynamic(
//   () => import("react-player"),
//   { ssr: false }
// ) as typeof ReactPlayerType;

const ModalVideo = () => {

  
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer min-w-[178px] flex items-center justify-center gap-3 bg-white hover:bg-gray-50 px-6 py-4 rounded-full text-gray-700 text-sm font-medium transition-colors shadow-sm">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#F4A896]">
            <Play className="w-4 h-4 text-[#F4A896] fill-[#F4A896]" />
          </div>
          Watch Video
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <div className="aspect-video w-full">

       
       <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Hf6abfL1la4?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;