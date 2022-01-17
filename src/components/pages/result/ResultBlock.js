import React from 'react'
import Image from 'next/image'
import Blocks from "../../atoms/blocks"
import 'tailwindcss/tailwind.css'
import blocks from '../../atoms/blocks';
function ResultBlock() {

    function generateBlocks(){
        let blocks = [];
        for(let i =0; i<60; i++){
            blocks.push(<Blocks key={i}/>)
        }
        return blocks;
      }

    return (
        <div className='w-4/5 m-auto relative mt-4'>
            
            <div className="text-lg font-daretro text-center  inline-block " style={{color: "#97daaf"}}>WITH ALL INGREDIENTS AVAILABLE</div>
            <div className="text-lg font-daretro text-center inline-block pl-24" style={{color: "#97daaf"}}>  __________________________________________________________________________</div>
            <div className="text-lg font-daretro text-center inline-block pl-24 float-right">FILTERS</div>
            
            <div className="flex flex-row flex-wrap">
                {generateBlocks()}
            </div>
            
        </div>
    )
}

export default ResultBlock
