import React from "react";
import './table.css'

export const GlobalSearch = ({filter,setFilter})=>{
    return (<>
    <div className='Head'>
    <h3>Bank Searches</h3>
        <label for="city">Choose a City:</label>

        <select name="city" id="city">
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Patna">Patna</option>
        <option value="Agartala">Agartala</option>
        </select>

        <span className='Top'>Search:{''}
        <input value={filter||''} onChange={(e)=>setFilter(e.target.value)}  />
        </span>
        </div>
    </>)
}