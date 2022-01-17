import React, {useState} from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Navbar from "./../components/navbar/navbar"
import ResultBlock from "./../components/pages/result/ResultBlock"
import axios from 'axios';
 function Result(props) {
    

   
   function raise(){
       console.log("raise")
   }

    
    return (
        <div className="min-h-screen" style={{backgroundColor: "#f1f8ed", color: "#97daaf"}}>
            <Navbar switch={props.switch}/>
            <ResultBlock recipes={props.recipes}></ResultBlock>
           
            
        </div>
    )
}

export default Result
