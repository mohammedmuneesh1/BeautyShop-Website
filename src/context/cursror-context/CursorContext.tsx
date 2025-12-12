"use client"

import React, { createContext, useContext, useEffect } from "react";
import {motion,useMotionValue,useSpring} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';



interface CursorContextType{
    mouseEnterHandler:()=>void,
    mouseLeaveHandler:()=>void
}
export const CursorContext = createContext<null | CursorContextType>(null);



const CursorProvider = ({children}:{children:React.ReactNode})=>{

    const [cursor,setCursor] = React.useState({
        size:30,
        background:'#473936'
    });
    const [isHovering,setIsHovering] = React.useState(false);


// Check if screen is small (mobile/tablet) - hides custom cursor on small screens
// smallViewPortisActive value true or false 

const smallViewPortIsActive = useMediaQuery({
    query: '(max-width: 1200px)',   //"Is the screen width 1200 pixels or smaller?"
});

 // ===== MOTION VALUES & SPRING ANIMATION SETUP =====


 // useMotionValue creates a value that can be animated without causing re-renders
 // Think of it as a "trackable number" that Framer Motion watches
 // mouseX and mouseY will hold the cursor's X and Y positions

// useMotionValue is like creating an empty box:

const mouseX = useMotionValue(0);   // mouseX = 0 (not tracking anything yet!)
const mouseY = useMotionValue(0);  // mouseY = 0 (not tracking anything yet!)

// useMotionValue is like creating an empty box:

// // mouseX is NOT a regular number!
// // It's a special Framer Motion object that looks like this:
// mouseX = {
//   current: 485,           // The actual value (e.g., 500 - 15 = 485)
//   set: function(),        // Method to update it
//   get: function(),        // Method to read it
//   // ...lots of internal Framer Motion magic
// }

//================================= ❌⚠️ WHY NOT USEsTATE INSTEAD OF  useMotionValue  STATE ❌⚠️  =================================

//    setMouseX(e.clientX - cursor.size/2);  
// Problem: This causes a FULL React re-render!
    // Mouse moves = 60+ times per second
    // = 60+ re-renders per second = LAG & JANK
//Result: Your cursor will be choppy and slow because React is re-rendering the entire component 60+ times per second!

//✅ With useMotionValue (GOOD - smooth performance):
    // NO React re-render! 
    // Framer Motion updates the DOM directly
    // = Smooth 60fps animation

//     useState approach:
// Mouse moves → setState → React re-render → Update DOM
// (SLOW: 16ms+ per update, causes lag)

// useMotionValue approach:
// Mouse moves → motionValue.set() → Update DOM directly
// (FAST: ~1ms per update, smooth 60fps)

//================================= ❌⚠️ WHY NOT USEsTATE INSTEAD OF  useMotionValue END ❌⚠️  =================================

 


// Spring animation configuration - controls how "bouncy" the cursor movement is


const springConfig = {
    damping: 20,  // How quickly the spring settles (higher = less bouncy)
    stiffness: 290, // how fast ,  How strong the spring is (higher = faster movement)
    mass: 0.45, // Weight of the cursor (higher = slower, more inertia)   more intertia "kind of bounce effect if value 2 "
};

    // useSpring takes the instant mouseX/mouseY values and smooths them out
    // This creates the "follow" effect where cursor lags slightly behind the mouse
    // Think of it as: mouseX = where mouse IS, springX = where cursor SMOOTHLY moves to


const springX = useSpring(mouseX,springConfig);  // Smoothed X position
const springY = useSpring(mouseY,springConfig);// Smoothed Y position 


// Step 2: Later, YOU manually update them with mouse position
const handleMouseMove = (e:MouseEvent)=>{
    if(!smallViewPortIsActive)  // Only track mouse on large screens
        {
         // Update the instant position values
        // Subtract half the cursor size to center it on the mouse pointer
        mouseX.set(e.clientX - cursor.size/2);
        mouseY.set(e.clientY - cursor.size/2);
          // Note: springX and springY automatically smooth these values!
    }
    else{
          // On small screens, hide the custom cursor completely
        setCursor({size:0,background:'none'});
    }
}


useEffect(()=>{
    // Attach mouse movement listener when component mounts
    window.addEventListener('mousemove',handleMouseMove);
    // Cleanup: remove listener when component unmounts
    return ()=>{
        window.removeEventListener('mousemove',handleMouseMove);
    }
},[cursor]); // Re-run if cursor size changes (for centering calculation) 


  // When mouse enters an interactive element (button, link, etc.)
const mouseEnterHandler=()=>{
    setCursor({size:90,background:"#00423a"});
    setIsHovering(true);
};

// When mouse leaves an interactive element
const mouseLeaveHandler = ()=>{
    setCursor({size:30,background:'#473936'});
    setIsHovering(false);
}








    return(
        <CursorContext.Provider value={{
            mouseEnterHandler,
            mouseLeaveHandler
        }}>
            <motion.div 
            className="fixed z-999 rounded-full pointer-events-none transition-all duration-300"
            style={{
                left:springX,
                top:springY,
                // left:mouseX,
                // top:mouseY,
                width:cursor.size,
                height:cursor.size,
                backgroundColor:cursor.background,
                mixBlendMode:isHovering ? 'difference' :"normal",
                transition:'width 0.2s ease-in-out , height 0.2s ease-in-out' 
            }}
            />
            {children}
        </CursorContext.Provider>
    )

}

export default CursorProvider;


 export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
      throw new Error('useCursor must be used within a CursorProvider');
    }
    return context;
  };