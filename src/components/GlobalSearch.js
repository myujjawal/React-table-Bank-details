import React from "react";
import './table.css'

export const GlobalSearch = ({filter,setFilter})=>{
    return (<>
    <div className='Head'>
        <span className='Top'>Search: {''}
        <input value={filter||''} onChange={(e)=>setFilter(e.target.value)}  />
        </span>
        </div>
    </>)
}