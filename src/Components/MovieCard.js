import React, { useState } from 'react'
import MovieList from './MovieList'
import './MovieCard.css'
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
       

   <div id="scale" className="col-3 card-deck mb-3 ml-2 mt-3">
      <Card >
       
        <CardImg style={{width:'70%',margin:'auto'}} src= {props.el.moviePoster} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.el.movieTitle}</CardTitle>
        
          <CardText tag="h6" className="mb-2 text-muted">{props.el.movieDescription}</CardText>
          
          <CardText tag="h1" className="mb-2 text-muted">{showStar(props.el.movieRate)}</CardText>
          
        </CardBody>
      </Card>
      </div>
  
     


      
    );
}
export default MovieCard;
