import React, {useState,useEffect,useMemo} from "react";
import TableStructure from "./components/TableStructure"
import './components/table.css'

require("es6-promise").polyfill();
require("isomorphic-fetch")

let cityCache={};
// cityCache.A=[];
let OGcity="MUMBAI";
export default function App() {
    const [city,setCity]=useState(window.localStorage.getItem('city') || "MUMBAI");
    // const initial = JSON.parse(window.localStorage.getItem('data')) || []; //Getting data cache on clients localStorage
    const cC = JSON.parse(window.localStorage.getItem('cityCache'))||{};

    

    // console.log('getcachecC',cC);
    cityCache=cC;
    
    const initData=cC[city]||[];
    const [data,setData]=useState(initData);
 
    //Cached API Call
    useEffect(()=>{
        // city = setCity(JSON.parse(window.localStorage.getItem('city'))|| "MUMBAI")
        if (city in cC) {
            setData(cC[city]);
        } else {
            fetch("https://vast-shore-74260.herokuapp.com/banks?city="+city)
            .then((response)=>response.json())
            .then((json)=>{

            setData(json); //Setting the data to state
            cityCache[city]=json;
            window.localStorage.setItem('cityCache',JSON.stringify(cityCache));
        })
        }
        

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
        onChange={(e) => {
            window.localStorage.setItem("PrevCity",JSON.stringify(OGcity));
            OGcity= e.target.value;
            setCity(e.target.value);
            console.log(e.data);
            }}
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