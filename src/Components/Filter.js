import React, { useState } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';


const Filter=(props)=>{

        const [search,setSearch]=useState("");

        
        
 return(
     
<div className="container">     
        
   <Input type="text" name="movietitle" id="movietitle" placeholder=""
        onChange={(e)=>setSearch(e.currentTarget.value)} />
        <button onClick={()=>props.searching(search)}>search</button>



</div>

 
 );

}
export default Filter;