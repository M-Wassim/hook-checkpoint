import React, { useState } from 'react'
import MovieCard from './MovieCard'
import {
   CardGroup,
     
   } from 'reactstrap';
import {   Input } from 'reactstrap';
import './MovieList.css'

const MovieList=({ListOfMovie,searching})=>{

     const [search,setSearch]=useState("");
     const [star,setStar]=useState(0)

 const stararray=['☆','☆','☆','☆','☆']
     
return(

     <div  className="container mt-3">

     <Input type="text" name="movietitle" id="movietitle" placeholder="type to search for a movie"
        onChange={(e)=>setSearch(e.currentTarget.value)} /> 

          <h1 style={{textAlign:'center'}}>
             {
                stararray.map((el,i)=><a  href=""  onClick={(e)=>{e.preventDefault()  
               setStar(i+1)}} 
               onDoubleClick={()=>setStar(0)}>{el}</a>)
             }
          </h1>
   

<div className="row" >
<CardGroup >
  
    
   {searching(search,star).map((el,i)=> <MovieCard el={el} key={i}/> )}
   
</CardGroup>
</div>


</div>
);

}

export default MovieList;