import React, { useState } from 'react'

import './App.css';
import MovieCard from './Components/MovieCard'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import  'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter.js'


function App() {


 const [ListOfMovie,setList]=useState([
{    movieTitle :'first Movie Title',
     movieDescription : 'first Movie description',
     moviePoster :'video.png',
     movieRate :4 ,
},
{
  movieTitle :'Second Movie Title',
  movieDescription : 'Second Movie description',
  moviePoster : 'video.png',
  movieRate : 5,
},
{
     movieTitle :'Third Movie Title',
     movieDescription : 'Third Movie description',
     moviePoster : 'video.png',
     movieRate :3,
},
{
  movieTitle :'fourth Movie Title',
  movieDescription : 'fourth Movie description',
  moviePoster : 'video.png',
  movieRate : 2,
},
{
  movieTitle :'fifth Movie Title',
  movieDescription : 'fifth Movie description',
  moviePoster : 'video.png',
  movieRate : 1,
},



]);

const add=(a,b,c,d)=>{ 
  setList([...ListOfMovie,{movieTitle:a,movieDescription:b,moviePoster:c,movieRate:d}]);

}


const searching=(term,x)=>{

  return (ListOfMovie.filter((el)=>el.movieTitle.toLowerCase().includes(term.toLowerCase())&&(el.movieRate>=x))) 
  }


  return (

    
    <div className="container">

<AddMovie add={add}  />

      {/* <Filter searching={searching} /> */}
    
 
      <MovieList ListOfMovie={ListOfMovie} searching={searching}  />

     

      

    
    </div>
  );
}

export default App;
