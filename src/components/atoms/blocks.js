import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
function blocks(props) {
    return (
        <div className="w-80 h-36 border-2 rounded-xl ml-5 text-center text-2xl">
            {props.recipes.description}
        </div>
    )
}

export default blocks
