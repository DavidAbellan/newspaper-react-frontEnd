import React from "react";
  
    function column (props){
        if (props.title == null) {
            return (<h1>Cargando</h1>);
        } else {
             return (
                <div className="column">
                <img src ={"http://localhost:3000/images/profiles/"+props.picture.filename}  alt={props.title}/>
                <h2>{props.title}</h2>
                </div>
            ); 
        }
    
    }
export default column;