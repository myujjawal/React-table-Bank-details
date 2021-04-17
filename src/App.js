import React, {useState,useEffect,useMemo} from "react";
import TableStructure from "./components/TableStructure"
import './components/table.css'

require("es6-promise").polyfill();
require("isomorphic-fetch")

let cityCache={};
// cityCache.A=[];

export default function App() {
    const [city,setCity]=useState(window.localStorage.getItem('city') || "MUMBAI");
    // const initial = JSON.parse(window.localStorage.getItem('data')) || []; //Getting data cache on clients localStorage
    const cC = JSON.parse(window.localStorage.getItem('cityCache'))||{};

    

    console.log('getcachecC',cC);
    cityCache=cC;
    console.log('citydata',cC[city]);
    const initData=cC[city]||[];
    const [data,setData]=useState(initData);
    
    

    
    //Cached API Call
    useEffect(()=>{
        // city = setCity(JSON.parse(window.localStorage.getItem('city'))|| "MUMBAI")
        fetch("https://vast-shore-74260.herokuapp.com/banks?city="+city)
        .then((response)=>response.json())
        .then((json)=>{
            setData(json); //Setting the data to state
            window.localStorage.setItem('data',JSON.stringify(json)) //Creating data cache on clients localStorage
            // window.localStorage.setItem('cityCache',cityCache[city]=[json]);
            
            cityCache[city]=json;
            console.log('setCache',cityCache);
            window.localStorage.setItem('cityCache',JSON.stringify(cityCache));
            // console.log('cacheCity',cityCache[city]);
        })

    }
    ,[city]);
    
    const COLUMN = useMemo(
        () => [{
        Header :'IFSC',
        accessor :'ifsc'
    },{
        Header :'Bank ID',
        accessor :'bank_id'
    },{
        Header :'Branch',
        accessor :'branch'
    },{
        Header :'Address',
        accessor :'address'
    },{
        Header :'City',
        accessor :'city'
    },{
        Header :'District',
        accessor :'district'
    },{
        Header :'State',
        accessor :'state'
    },{
        Header :'Bank Name',
        accessor :'bank_name'
    }
    ],[])
    
    // window.localStorage.setItem('cityCache',cityCache[city]=JSON.stringify(data));
    
    return(<>
        <div className='top'>
        <h1>Bank Searches</h1>
        <label for="city">Choose a City: </label>

        <select 
        onChange={(e) => setCity(e.target.value)}
        name="city" id="city">
        <option value="MUMBAI">Mumbai</option>
        <option value="BANGALORE">Bangalore</option>
        <option value="DELHI">Delhi</option>
        <option value="PATNA">Patna</option>
        <option value="AGARTALA">Agartala</option>
        </select>
        </div>

        <TableStructure columns={COLUMN} data={data} city={city}/>
    </>)
}