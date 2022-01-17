import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
function Overlay(props) {
    return (
        <div className="absolute top-0 min-h-screen  flex flex-row flex-wrap w-screen" style={{backgroundColor: "rgba(241, 248, 237, 0.95)"}}>
             <div className="w-screen m-auto text-center text-4xl font-bold">
                SHOW ME RECIPES...
             </div>
             <div className="block w-1/3 ml-auto text-center"><Image
                    src="/img/yes.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    onClick={()=>{ props.switch(); props.get("full") }}
                /><div  className="text-green-500 text-bold">
                WITH ALL INGREDIENTS AVAILABLE
                </div></div>
             <div className="block w-1/3 ml-auto text-center"><Image
                    src="/img/plus.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    onClick={()=>{ props.switch(); props.get("partial") }}
                /><div  className="text-yellow-400 text-bold">
                WITHOUT OPTIONAL INGREDIENTS
                </div></div>
             <div className="block w-1/3 ml-auto text-center"><Image
                    src="/img/cancel.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    onClick={()=>{ props.switch(); props.get("weak") }}
                /><div className="text-red-400 text-bold">
                WITH REQUIRED INGREDIENTS
                </div></div>
            <div className="absolute top-6 left-6">
            <Image
                    src="/img/previous.png"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    onClick={props.show}
                />
            </div>
                
        </div>
    )
}

export default Overlay
