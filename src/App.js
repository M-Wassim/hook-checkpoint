import React, { useState } from 'react'

import './App.css';
import MovieCard from './Components/MovieCard'
import MovieList from './Components/MovieList'
import AddMovie from './Components/AddMovie'
import  'bootstrap/dist/css/bootstrap.min.css';

import ShowMovie from './Components/ShowMovie'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {


 const [ListOfMovie,setList]=useState([
{   id:1, 
    movieTitle :'First Movie Title',
    movieDescription : `first Movie description first Movie description first Movie description first Movie description
     first Movie description first Movie description first Movie description first Movie description`,
     
     moviePoster :'video.png',
     movieRate :4 ,
     movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'
},
{
  id:2,
  movieTitle :'Second Movie Title',
  movieDescription : `Second Movie Description Second Movie Description Second Movie Description
  Second Movie Description Second Movie Description Second Movie Description`,
  moviePoster : 'video.png',
  movieRate : 5,
  movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'
},
{
  id:3,
     movieTitle :'Third Movie Title',
     movieDescription : `third Movie Description third Movie Descriptionthird Movie Descriptionthird Movie Description
     third Movie Descriptionthird Movie Descriptionthird Movie Descriptionthird Movie Description`,
     moviePoster : 'video.png',
     movieRate :3,
     movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'
},
{
  id:4,
  movieTitle :'Fourth Movie Title',
  movieDescription : `fourth Movie Description fourth Movie Descriptionfourth Movie Description
  fourth Movie Descriptionfourth Movie Descriptionfourth Movie Descriptionfourth Movie Description`,
  moviePoster : 'video.png',
  movieRate : 2,
  movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'
},
{
  id:5,
  movieTitle :'Fifth Movie Title',
  movieDescription : `fifth Movie Description fifth Movie Descriptionfifth Movie Descriptionfifth Movie Descriptionfifth Movie Description
  fifth Movie Descriptionfifth Movie Descriptionfifth Movie Descriptionfifth Movie Description`,
  moviePoster : 'video.png',
  movieRate : 1,
  movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'
},



]);

const add=(a,b,c,d)=>{ 
  setList([...ListOfMovie,{movieTitle:a,movieDescription:b,moviePoster:c,movieRate:d,id:Math.random(), movieTrailer:'https://www.youtube.com/embed/OlMKPpy0Z-I'}]);

}


const searching=(term,x)=>{

  return (ListOfMovie.filter((el)=>el.movieTitle.toLowerCase().includes(term.toLowerCase())&&(el.movieRate>=x))) 
  }


  return (
<Router>
    
    <div className="container">

      <Switch>
       <Route path="/movie/:id" render={(props)=> <ShowMovie ListOfMovie={ListOfMovie} {...props} />}>
          
       </Route>
       <Route exact path="/">
          <AddMovie add={add}  />
          <MovieList  searching={searching}  />
       </Route>
     </Switch>

    

    
    </div>
    
     
    
    </Router>
  );
}

export default App;
