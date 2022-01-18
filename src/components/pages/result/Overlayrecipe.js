import React from 'react'

function Overlayrecipe(props) {
    return (
        <div className="absolute flex-col flex-wrap self-center w-full h-full bg-green-100 border-gray-100 border-2 justify-center rounded-xl">
             <div className="w-full md:text-base text-center m-auto self-center lg:text-xl font-bold break-words">
            {props.recipes.name}
            </div>
            <div className="w-full md:text-base text-center m-auto self-center lg:text-xl break-words">
            {props.recipes.description}
            </div>
            <div className="w-full md:text-base text-center m-auto self-center lg:text-xl  break-words">
            Porcja dla {props.recipes.portionSize} osób
            </div>
            <div className="w-full md:text-base text-center m-auto self-center lg:text-xl  break-words">
            Kalorie: {props.recipes.caloriesAmount}
            </div>
            <div className="w-full md:text-base text-center m-auto self-center lg:text-xl break-words">
            składniki: {props.recipes.ingredients.map((e,i)=>{
                if(i == props.recipes.ingredients.length-1) return e + "."
                return e + ","
            })}
            <div className="absolute right-4 top-2" onClick={()=>props.show()}>
                X
            </div>
            </div>
        </div>
        
    )
}

export default Overlayrecipe
