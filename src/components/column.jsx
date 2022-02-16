import React from "react";
import {Link} from "react-router-dom";
  
    function column (props){
        let id = props.id
        if (props.title == null) {
            return (<h1>Cargando</h1>);
        } else {
             return (
                <div className="column">
                <img src ={"http://localhost:3000/images/profiles/"+props.picture.filename}  alt={props.title}/>
                <Link className="titleNotOutstanding" to={{
                    pathname : "/col/" + id
                    }}>
                <h2>{props.title}</h2>
                </Link>
                </div>
            ); 
        }
    
    }
export default column;