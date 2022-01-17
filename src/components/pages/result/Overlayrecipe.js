import React from 'react'

function Overlayrecipe(props) {
    return (
        <div className="absolute flex-col flex-wrap self-center w-full h-3/4 bg-green-100 border-gray-100 border-2 justify-center rounded-xl">
             <div className="flex w-full ext-sm md:text-base text-center self-center lg:text-xl font-bold break-words">
            {props.recipes.name}
            </div>
            <div>
            {props.recipes.description}
            </div>
            <div>
            Porcja dla {props.recipes.portionSize} osób
            </div>
            <div>
            Kalorie: {props.recipes.caloriesAmount}
            </div>
            <div>
            składniki: {props.recipes.ingredients.map((e,i)=>{
                if(i == props.recipes.ingredients.length-1) return e + "."
                return e + ","
            })}
            </div>
        </div>
        
    )
}

export default Overlayrecipe
