import React, {useState} from 'react'
import Image from 'next/image'
import Blocks from "../../atoms/blocks"
import 'tailwindcss/tailwind.css'
import blocks from '../../atoms/blocks';
import Overlay from './Overlayrecipe'
function ResultBlock(props) {
    const [show, toogle_show] = useState(false)
    const [current_recipe, change_recipe] = useState({})

    function generateBlocks(){
        let blocks = [];
        for(let i =0; i<props.recipes.length; i++){
            blocks.push(<Blocks onclick={()=>showOverlayRecipe(props.recipes[i])} key={i} recipes={props.recipes[i]}/>)
        }
        return blocks
    }
    function hide_show(){
        toogle_show(!show)
    }

    function showOverlayRecipe(e){
        change_recipe(e)
        hide_show()
        console.log(e)
    }

    const text = {"full": "WITH ALL INGREDIENTS AVAILABLE", "partial":"WITHOUT OPTIONAL INGREDIENTS",  "weak":"WITHOUT REQUIRED INGREDIENTS"}
    return (
        <div className='w-4/5 m-auto relative mt-4'>
            <div className="text-lg font-daretro text-center w-full inline-block " style={{color: "#97daaf"}}>{text[props.get]}</div>
           {/*  <div className="text-lg font-daretro text-center inline-block pl-24" style={{color: "#97daaf"}}>  _______________________________</div>
            <div className="text-lg font-daretro text-center inline-block pl-8 float-right">FILTERS</div> */}
            <div className="flex flex-row flex-wrap ">
                {generateBlocks()}
                {(show)?<Overlay recipes={current_recipe} show={hide_show}/>:null}
                {console.log(props.recipes)}
            </div>
            
        </div>
    )
}

export default ResultBlock
