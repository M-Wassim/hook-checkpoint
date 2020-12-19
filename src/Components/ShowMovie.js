import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap';
const ShowMovie = ({match,ListOfMovie}) => {

const movie= ListOfMovie.find(el=>el.id == match.params.id)
 


    return (

        
        <div>
            <Link to='/'>
                <div style={{textAlign:'center'}}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/967/967652.svg" width="50px"></img>
            </div>
            </Link>
            <div style={{textAlign:'center'}} className="mt-1"> 
                <Jumbotron fluid>
                    <Container fluid>
                    <h3 className="display-5">{movie.movieTitle}</h3>
                    <p className="lead">{movie.movieDescription}</p>
                    </Container>
                </Jumbotron>
                
            </div>
            

<iframe width="100%" height="480" src={movie.movieTrailer} 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
      
           
            
        </div>
    )
}

export default ShowMovie

