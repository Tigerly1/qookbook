import React, {useEffect} from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Navbar from "./../components/navbar/navbar"
import ResultBlock from "./../components/pages/result/ResultBlock"
import axios from 'axios';
function Result(props) {
    
    async function fetchData () {
    const url = "qookbookagh.herokuapp.com/api/v1/get-recipes"
    const result = await axios({
            method: "GET",
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            //data: ["jajko"]
        })
    const fetchData = JSON.parse(result.data);
    console.log(fetchData)
    }
    
   

    
    return (
        <div className="min-h-screen" style={{backgroundColor: "#f1f8ed", color: "#97daaf"}}>
            <Navbar switch={props.switch}/>
            <ResultBlock></ResultBlock>

           
            
        </div>
    )
}

export default Result
