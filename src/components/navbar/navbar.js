import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
function navbar(props) {
    return (
        <div className="h-32 pt-2">
            <div className="absolute top-6 left-6 z-20">
            <Image
                    src="/img/previous.png"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    onClick={props.switch}
                />
            </div>
            <div className="text-4xl font-daretro text-center block " style={{color: "#97daaf"}}>QookBook</div>
            <div className="float-right text-red-400 pr-20 text-sm">
                <ol>
                    <li>PANTRY</li>
                    <li>PROFILE</li>
                    <li>SETTINGS</li>
                </ol>
            </div>
        </div>)
}

export default navbar
