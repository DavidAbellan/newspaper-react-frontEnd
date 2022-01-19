import React from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import {Row,Col,  Container, Button } from "react-bootstrap";

  const url = "http://localhost:3000/";
  class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            result :[],
            name : ""
        }
    
    this.get_results = this.get_results.bind(this);

    }
    async get_results(event){
        
        this.setState({
            name : event.target.value
        });
        let content = await axios.get(url+"search/"+this.state.name);       
        this.setState({
            result : content
          })
          

     
    }
    render(){
       
         if (this.state.name.length > 3) {
         return(  
           <div> 
              <input type='text' value={this.state.name}  onChange={this.get_results}></input>
              <MyModalWithGrid {...this.state.result.data.articles}></MyModalWithGrid>
         
          </div>    

  
         );
         } else {
             return(
                <div> 
                  <input type='text' value={this.state.name}  onChange={this.get_results}></input>
               </div>  
             );
           }
        }
    
  
  };
  function MyModalWithGrid(props){
       let arrayProps = Object.values(props);
       let newProps = [];
       for(let i=0; i < arrayProps.length; i++){
           newProps.push(arrayProps[i]);

       }
       
      console.log("NEWPROPS",newProps)
      return (
          <div>
        {newProps.map((a,k) =><Row ><Col xs={12} md={8} key={k}>{a.title}</Col> </Row>)}
        </div>
       /* <Modal {...newProps} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-vcenter">
              Resultados de la búsqueda 
           </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
       
            </Container>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={newProps.onHide}>Cerrar</Button>
        </Modal.Footer>
    </Modal> */

      )
  }  




  export default Search;



