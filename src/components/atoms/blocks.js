import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
function blocks(props) {
    return (
        <div className="flex justify-center flex-col mt-6  w-28 h-20 lg:w-1/6 lg:h-32 border-2 rounded-xl mr-2 text-center text-xl bg-gray-100" onClick={()=>props.onclick()}>
            <div className="flex text-sm md:text-base self-center lg:text-xl font-bold break-words">
            {props.recipes.name}
            </div>
            {/* <div>
            {props.recipes.description}
            </div> */}
            {/* <div>
            Porcja dla {props.recipes.portionSize} osób
            </div>
            <div>
            Kalorie: {props.recipes.caloriesAmount}
            </div> */}
           {/*  <div>
            składniki: {props.recipes.ingredients.map((e,i)=>{
                if(i == props.recipes.ingredients.length-1) return e + "."
                return e + ","
            })}
            </div> */}
            
        </div>
    )
}

export default blocks
