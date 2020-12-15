import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const AddMovie=(props)=>{

 
    
      const [modal, setModal] = useState(false);
      const [title,setTitle] = useState("")
      const [description,setDescription] = useState("")
      const [poster,setPoster] = useState("")
      const [rating,setRating] = useState("")
    
      const toggle = () => setModal(!modal);
      

      
      return (
        <div style={{width:'200px'}} className="mx-auto mt-3">
        
    
          <Button color="danger" onClick={toggle}>add new movie </Button>
          <Modal isOpen={modal} toggle={toggle} className="">
            <ModalHeader toggle={toggle}>Add New Movie</ModalHeader>
            <ModalBody>
            <Form onSubmit={(e)=>{e.preventDefault()
              props.add(title,description,'video.png',rating)
              toggle()}}>
                    <FormGroup>
                        <Label for="movietitle">Movie title:</Label>
                        <Input type="text" name="movietitle" id="movietitle" placeholder=""
                         onChange={(e)=>{setTitle(e.currentTarget.value)}} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="moviedescription">Movie description:</Label> 
                        <Input type="text" name="description" id="description" placeholder="" 
                        onChange={(e)=>{setDescription(e.currentTarget.value)}} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="movietitle">Movie poster:</Label>
                        <Input type="text" name="poster" id="poster" placeholder="" 
                        onChange={(e)=>{setPoster(e.currentTarget.value)}} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="movietitle">Movie rating:</Label>
                        <Input type="number" name="rating" id="rating" max="5" min="0" placeholder="" 
                        onChange={(e)=>{setRating(e.currentTarget.value)}} required />
                    </FormGroup>
                 <ModalFooter>
                 <Input color="primary" type="submit" value="Add movie" />
              <Button color="secondary" onClick={toggle}>Cancel</Button>
             
              </ModalFooter>
              
            </Form>
            </ModalBody>
          
            
          </Modal>
          
        </div>
      );
    
}

export default AddMovie ; 