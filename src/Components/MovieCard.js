import React, { useState } from 'react'
import MovieList from './MovieList'
import './MovieCard.css'
import ShowMovie from './ShowMovie'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {
   Card, Button, CardImg, CardTitle, CardText, CardGroup,
   CardSubtitle, CardBody
 } from 'reactstrap';



 const showStar = (n) =>{
  let tab=['★','☆','☆','☆','☆'];
   for (let i=1 ; i<n ; i++ ){
tab[i] = '★'
   }
   return tab
 }

 
const MovieCard=(props)=>{

  

    return(
       
<Link to= {`/movie/${props.el.id}`}>
   <div id="scale" >
      <Card   className="card-deck mb-3 mr-5 ml-3 mt-3"
        style={{ width: "250px"}} >
       
        <CardImg style={{width:'70%',margin:'auto'}} src= {props.el.moviePoster} alt="Card image cap" />
        <CardBody >
          <CardTitle tag="h5">{props.el.movieTitle}</CardTitle>
        
          <CardText tag="h6" className="mb-2 text-muted" style={{maxHeight:'20px',overflow:'hidden'}} >{props.el.movieDescription}</CardText>
          
          <CardText tag="h1" className="mb-2 text-muted">{showStar(props.el.movieRate)}</CardText>
          
        </CardBody>
      </Card>

     
      </div>
      </Link>

      
    );
}
export default MovieCard;
