import React from 'react'
import axios from 'axios';
function Fetcher(props) {

    async function fetchData () {
        const url = "http://qookbookagh.herokuapp.com/api/v1/get-recipes-by-ingredients-weak"
        /* try{
            await axios({
                method: "GET",
                url: url,
                cors: false,
                data: ["jajko", "sol", "cebula", "pieprz"]
                //data: ["jajko", "sol", "cebula", "pieprz"]
            }).then(data=>console.log(data))
        } catch (err) {
            console.log(err)
        } */
      /*   var myHeaders = new Headers();
        
        let params = "?names=jajko&names=cebula&names=pieprz";
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://qookbookagh.herokuapp.com/api/v1/get-recipes-by-ingredients-weak"+params, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); */
        var myHeaders = new Headers();
        
        let params = "?string=so";
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://qookbookagh.herokuapp.com/api/v1/get-ingredients-by-string"+params, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        /* let data = ["jajko", "sol", "cebula", "pieprz"];
        try{
            axios.get(url).then(data=>console.log(data.data))
        } catch (err) {
            console.log(err)
        } */
       /*  const data = JSON.parse(result.data);
        console.log(data) */
    }

    fetchData();
    return null;
}

export default Fetcher
