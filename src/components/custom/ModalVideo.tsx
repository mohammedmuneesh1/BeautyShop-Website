import React from 'react'
import ReactPlayer from "react-player";

import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
import Image from 'next/image';

const ModalVideo = () => {
  return (
    <Dialog>
        <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">

                <ReactPlayer
                 width={"100%"}
                 height={"100%"}
                url={"https://www.youtube.com/watch?v=nmDQm9Y_J90"}
                 controls={true}
                 light={true}
                 className="aspect-video"
                 //eslint-disable-next-line
                  {...({} as any)}
               />

            </DialogContent>
                

    </Dialog>
  )
}

export default ModalVideo;