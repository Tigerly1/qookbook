import 'tailwindcss/tailwind.css'
import React, {useState} from 'react'
import Image from 'next/image'
import Result from "./Result"
import Overlay from "../components/pages/main/Overlay.js"
import Fetcher from "../components/pages/result/Fetcher.js"
export default function Main() {
  const [ingredients, addIngredient] = useState([])
  const [next_page, go_next_page] = useState(false)
  const [load_recipes, lets_load] = useState(false)
  const [loaded_recipes, actual_recipes] = useState({})

  function change_overlay(){
    if(ingredients.length > 0){
      go_next_page(!next_page)
    }
    
  }

  function load_recipes_switch(){
    lets_load(!load_recipes)
  }

  function add_ingredient(ingr){
    addIngredient(old => [...old, ingr])
    console.log(ingredients)
  }
  /* INPUT({defaultValue: value, ref: ref, onBlur: hide,
    onKeyUp: (e) => this.acceptKey(e) && hide(),
    autoFocus: true, type: "text", style: {width:"100%"}} */
  function accept_input(e){
    console.log(e.key)
    if(["Enter","Escape"," "].includes(e.key)) {
      add_ingredient(e.target.value);
      e.target.value = ""
    }
  }
  function render_ingredients(){
    return ingredients.map((e, i)=>{
      return <div key={i}className="self-center mt-6"><input type="text" className=" self-center w-80 h-8 border-gray-50 rounded-md pl-5 font-bold" defaultValue={e}/></div>
    })
  }

  return (
    <div>
        <div className="flex flex-col min-h-screen justify-start font-sans" style={{backgroundColor: "#f1f8ed", color: "#97daaf", display: (!load_recipes)?"flex":"none"}}>
          <div className="text-9xl  self-center font-daretro mt-52 " style={{}}>QookBook</div>
          <div className=" self-center">Find a new cooking inspiration in your fridge</div>
          <div className="self-center mt-12"><input type="text" className=" b self-center w-80 h-8 border-gray-50 rounded-md pl-5" onKeyUp={(e)=>accept_input(e)} autoFocus={true}/></div>
          {render_ingredients()}
          <div className=" text-green-300 self-center mt-4"><div className="bg-green-400 rounded-full w-32 h-32 p-4 c"><Image
                      src="/img/salad.png"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                      onClick={change_overlay}
                  />
            </div></div>
          <div className="self-center  mt-auto mb-10 ">AGH | Informatyka i systemy inteligentne | Inżynieria oprogramowania</div>
          {(next_page)?<Overlay show={change_overlay} switch={load_recipes_switch}/>:null}
      </div>
    <div>{(load_recipes)?<Result ingredients={ingredients} switch={load_recipes_switch} />:null}</div>
    {(load_recipes)?<Fetcher recipes={actual_recipes}/>:null}
    </div>
  )
}
