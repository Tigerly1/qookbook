import 'tailwindcss/tailwind.css'
import React, {useState} from 'react'
import Image from 'next/image'
import Result from "../components/Result"
import Overlay from "../components/pages/main/Overlay.js"
import Fetcher from "../components/pages/result/Fetcher.js"
export default function Main() {
  const [ingredients, addIngredient] = useState([])
  const [next_page, go_next_page] = useState(false)
  const [load_recipes, lets_load] = useState(false)
  const [type_of_get, swap_get] = useState("full")
  const [loaded_recipes, actual_recipes] = useState([])

  function change_overlay(){
    if(ingredients.length > 0){
      go_next_page(!next_page)
    }
    
  }

  

  async function Fetcher(a) {
    swap_get(a)
    let url = "https://qkbk-backend.herokuapp.com/api/v1/get-recipes-by-ingredients-"
    url += a
    let params = "?"
    ingredients.map((e,i)=>{
        if(i>0){
            params += "&names="+e
        }else{
            params += "names="+e
        }
    })
    var myHeaders = new Headers();
    console.log(params)
    var requestOptions = {  
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let recipes = await fetch(url+params, requestOptions)
    .then(response => response.text())
    .then(result=>result)
    .catch(error => console.log('error', error));
    
    actual_recipes(JSON.parse(recipes))
    setTimeout(() => {}, 1000);
    load_recipes_switch()

    return null;
  }

  function load_recipes_switch(){

    lets_load(!load_recipes)
    
  }

  function add_ingredient(ingr){
    addIngredient(old => [...old, ingr])
  }
  /* INPUT({defaultValue: value, ref: ref, onBlur: hide,
    onKeyUp: (e) => this.acceptKey(e) && hide(),
    autoFocus: true, type: "text", style: {width:"100%"}} */

  async function fetchData (string) {
      const url = "https://qkbk-backend.herokuapp.com/api/v1/get-ingredients-by-string"
      var myHeaders = new Headers();
      let params = "?string="+string;
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
      let result = []
      result = await fetch(url+params, requestOptions)
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
      return JSON.parse(result)
  }


  async function ingr_input(e){
    document.getElementById("inp-datalist").innerHTML = ''
    let string = await fetchData(e.target.value)
    datalist_render(string)
    if( !ingredients.includes(e.target.value) && string.includes(e.target.value)) {
      add_ingredient(e.target.value);
      e.target.value = ""
    }
  }
  function datalist_render(string){
    
    string.map((e, i)=>{
      if (!ingredients.includes(e)){
        let opt = document.createElement("option");
        opt.value = e
        document.getElementById("inp-datalist").appendChild(opt)
      }
     
    })
  }
  function remove_ingredient(ingr){
    console.log(ingr)
    let result = ingredients.filter(ing=> ing != ingr)
    addIngredient(result)

  }

  function render_ingredients(){
    return ingredients.map((ingr, i)=>{
      return <div key={i}className="self-center mt-3 mb-2"><div className="relative m-auto self-center text-center w-60 h-7 border-gray-50 rounded-md font-bold bg-white" >{ingr}<div className="absolute top-0 right-5" onClick={()=>remove_ingredient(ingr)}>x</div></div></div>
    })
  }

  return (
    <div>
        <div className="flex flex-col h-screen justify-start font-sans" style={{minHeight: "-webkit-fill-available",backgroundColor: "#f1f8ed", color: "#97daaf", display: (!load_recipes)?"flex":"none"}}>
          <div className="text-9xl  self-center font-daretro mt-52 " style={{}}>QookBook</div>
          <div className=" self-center">Find a new cooking inspiration in your fridge</div>
          <div className="self-center mt-12"><input list="inp-datalist" type="text" className=" b self-center w-80 h-10 border-gray-50 rounded-md pl-5" onKeyUp={(e)=>ingr_input(e)} autoFocus={true}/><datalist id="inp-datalist"></datalist></div>
          {/* <div className="self-center mt-6 bg-gray-50 w-96 m-auto rounded-md border-gray border-2">
         
          </div> */}
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
          {(next_page)?<Overlay show={change_overlay} fetcher={Fetcher}/>:null}
      </div>
    <div>{(load_recipes)?<Result ingredients={ingredients} switch={load_recipes_switch} get={type_of_get} recipes={loaded_recipes} />:null}</div>
    </div>
  )
}
