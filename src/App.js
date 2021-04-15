import React, {useState,useEffect,useMemo} from "react";
import TableStructure from "./components/TableStructure"

require("es6-promise").polyfill();
require("isomorphic-fetch")

export default function App() {
    const initial = JSON.parse(window.localStorage.getItem('data')) || [];
    const [data,setData]=useState(initial);

    

    useEffect(()=>{
        fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
        .then((response)=>response.json())
        .then((json)=>{setData(json);
            console.log(JSON.stringify(json));
            window.localStorage.setItem('data',JSON.stringify(json))})
        // .then((json)=>console.log(JSON.stringify(json)))
        // .then((data)=>window.localStorage.setItem('data',JSON.stringify(data)))
    }
    ,[]);

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
    


    return(
        <TableStructure columns={COLUMN} data={data} />
    )
}