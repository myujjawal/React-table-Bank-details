import React, {useState,useEffect,useMemo} from "react";
import TableStructure from "./components/TableStructure"
import './components/table.css'

require("es6-promise").polyfill();
require("isomorphic-fetch")



export default function App() {
    const initial = JSON.parse(window.localStorage.getItem('data')) || []; //Getting data cache on clients localStorage
    const [data,setData]=useState(initial);
    
    const [city,setCity]=useState(window.localStorage.getItem('city') || "MUMBAI");

    
    //Cached API Call
    useEffect(()=>{
        // city = setCity(JSON.parse(window.localStorage.getItem('city'))|| "MUMBAI")
        fetch("https://vast-shore-74260.herokuapp.com/banks?city="+city)
        .then((response)=>response.json())
        .then((json)=>{
            setData(json); //Setting the data to state
            window.localStorage.setItem('data',JSON.stringify(json)) //Creating data cache on clients localStorage
            window.localStorage.setItem('city',city)
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
        <option value="PUNE">Pune</option>
        <option value="AGARTALA">Agartala</option>
        </select>
        </div>

        <TableStructure columns={COLUMN} data={data} />
    </>)
}