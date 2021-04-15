import React from "react";

export const GlobalSearch = ({filter,setFilter})=>{
    return (
        <span className='Top'>Search:{''}
        <input value={filter||''} onChange={(e)=>setFilter(e.target.value)}  />
        </span>
    )
}