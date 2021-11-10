import React from "react";
  
    function article (props){
        console.log("PROPS", props);
        if (props.title == null) {
            return (<h1>Cargando</h1>);
        } else {
            if (props.outstanding) {
             return (
                 
                <div className="outstandingNew">
                <h2>{props.title}</h2>
                <img src ={"http://localhost:3000/images/"+props.photo.filename}  alt={props.title}/>
                <div className="subhead">{"@"+props.author+ "  " + props.created} </div>
                </div>
            ); } else {
              return (
                <div className="normalNew">
                <img src ={"http://localhost:3000/images/"+props.photo.filename}  alt={props.title}/>
                <h5>{props.title}</h5>

                </div>

              );

            }
        }
    }

export default article;