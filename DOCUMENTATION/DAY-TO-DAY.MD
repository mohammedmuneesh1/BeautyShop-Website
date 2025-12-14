

//--------------------  12-12-205 START ---------------------------------------

1) project starting at 6:41pm 

next js installation: npx create-next-app@latest,

installed packages : npm install framer-motion react-icons react-player react-responsive react-countup 


//=================================
shadcn installed 
PS D:\PERSONAL PROJECTS\beautyShop-website\beautyshop> npx shadcn@latest init
Need to install the following packages:
shadcn@3.5.2
Ok to proceed? (y) y

✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
√ Which color would you like to use as the base color? » Neutral                                                       
✔ Writing components.json.
✔ Checking registry.
✔ Updating CSS variables in src\app\globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - src\lib\utils.ts

Success! Project initialization completed.
You may now add components.



//CHECK THE SHADCN DOCUMENTATION FOR FURTHER DETAILS ABOUT SHADCN 
//=================================



//--------------------  12-12-205 END ---------------------------------------
//--------------------  13-12-205 START ---------------------------------------
<div className='hidden xl:flex xl:h-screen  
        xl:w-screen fixed top-0 left-0  right-0 pointer-events-none z-999'>


HERE WE USED FIXED BUT THE POINTER-EVENTS-NONE PREVENT THE FIXED BEHAVIOUR HELPS TO CLIECK THE BACKGROUND ELEMENTSA 


pointer-events-none
This prevents:

Blocking clicks

Blocking scroll

Random bugs during animation

Without it:
Your overlay becomes an invisible wall.
Users rage. You debug for hours. You regret life choices.



Does AnimatePresence disappear after animation?

No. This is where beginners get confused.

AnimatePresence stays mounted

The motion div animates

The overlay moves out of view

Nothing is destroyed permanently

On next route change:

Old instance runs exit

New instance runs initial → animate





2) 

1️⃣ First render (page loads)

Framer Motion does this:
initial  →  animate


const animation = {
    initial:{
        top:'0%',
        
    },
    animate:{
        top:'-100%'
    },
    exit:{
        top:["100%","0%"]
    }
}



initial: top: 0%
Overlay fully covers the screen
animate: top: -100%
Overlay slides up and disappears

So yes:
➡ TOP → UP → OFF SCREEN
This is the “page reveal” animation.


What does top: -100% mean?

It means:
The overlay moves one full height upward
It ends above the viewport
Still exists, just invisible
Think of the overlay as a sliding door.

2️⃣ When route changes (pathname changes)
This is where exit kicks in.
<div key={pathname}>Because of:
React unmounts the old one.

Framer Motion says:
“Oh, you’re leaving? Run exit.”

Meaning:

  exit:{   // TRIGGER ONLY WHEN WE CHANGE TO ANOTHER ROUTE 
        top:["100%","0%"]
    }


Start at top: 100%
Overlay starts below the screen
Move to top: 0%
Overlay slides up to cover the screen


initial always triggers first. Period.
mount → initial → animate

Start at top: 0%
Animate to top: -100%

0% is VERTICAL TOP





//--------------------  13-12-205 END ---------------------------------------