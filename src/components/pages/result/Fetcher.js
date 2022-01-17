import React from 'react'
function Fetcher(props) {
    let url = "https://qkbk-backend.herokuapp.com/api/v1/get-recipes-by-ingredients-"
    url += props.option
    let params = "?"
    props.ingredients.map((e,i)=>{
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

    let recipes = fetch(url+params, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .then(result=>{
        console.log(result)
        props.recipes(recipes)
    })
    .catch(error => console.log('error', error));
    
    

    return null;
}

export default Fetcher
