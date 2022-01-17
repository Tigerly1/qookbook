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

  function fetchyk(){
    /* var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "JSESSIONID=6505852A99F3608F70F351432AFC5B1C");

var raw = JSON.stringify({
  "authorId": 1,
  "name": "test1",
  "description": "eloelo320",
  "portionSize": 1,
  "caloriesAmount": 69,
  "preparationTime": 10,
  "ingredients": [
    "testskladnik1"
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://qkbk-backend.herokuapp.com/api/v1/add-recipe", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */
  }

  async function Fetcher() {
    let url = "https://qkbk-backend.herokuapp.com/api/v1/get-recipes-by-ingredients-"
    url += type_of_get
    let params = "?"
    ingredients.map((e,i)=>{
        if(i>0){
            params += "&names="+e
        }else{
            params += "names="+e
        }
    })
    var myHeaders = new Headers();
        
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let recipes = await fetch(url+params, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .then(result=>{
        console.log(JSON.parse(result))
        actual_recipes(JSON.parse(result))
    })
    .catch(error => console.log('error', error));
    
    

    return null;
  }

  function load_recipes_switch(){
    if(!load_recipes){
      Fetcher()
    }
    lets_load(!load_recipes)
    
  }

  function add_ingredient(ingr){
    fetchyk()
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
    if(/* ["Enter","Escape"," "].includes(e.key) || */ string.includes(e.target.value)) {
      add_ingredient(e.target.value);
      e.target.value = ""
    }
  }
  function datalist_render(string){
    
    string.map((e, i)=>{
      let opt = document.createElement("option");
      opt.value = e
      document.getElementById("inp-datalist").appendChild(opt)
    })
  }


  function render_ingredients(){
    return ingredients.map((e, i)=>{
      return <div key={i}className="self-center mt-6"><input type="text" className=" self-center w-80 h-8 border-gray-50 rounded-md pl-5 font-bold" defaultValue={e}/></div>
    })
  }

  return (
    <div>
        <div className="flex flex-col h-screen justify-start font-sans" style={{minHeight: "-webkit-fill-available",backgroundColor: "#f1f8ed", color: "#97daaf", display: (!load_recipes)?"flex":"none"}}>
          <div className="text-9xl  self-center font-daretro mt-52 " style={{}}>QookBook</div>
          <div className=" self-center">Find a new cooking inspiration in your fridge</div>
          <div className="self-center mt-12"><input list="inp-datalist" type="text" className=" b self-center w-80 h-8 border-gray-50 rounded-md pl-5" onKeyUp={(e)=>ingr_input(e)} autoFocus={true}/><datalist id="inp-datalist"></datalist></div>
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
          {(next_page)?<Overlay show={change_overlay} switch={load_recipes_switch} get={swap_get}/>:null}
      </div>
    <div>{(load_recipes)?<Result ingredients={ingredients} switch={load_recipes_switch} get={type_of_get} recipes={loaded_recipes} />:null}</div>
    </div>
  )
}
