import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class ArticleInSectionGrid extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        title : props.title,
        createdAt : props.createdAt,
        main_text : props.main_text,
        author_id : props.author_id,
        outstanding : props.outstanding,
        id : props.id,
        updatedAt :props.updatedAt,
        photos : []
    }
    this.setPhotos(this.state.id);
   }

   async setPhotos(id){
       let photos = await axios.get('http://localhost:3000/getpicture/' + id);
       this.setState({
           photos : photos.data.photos
       })

   }

   render(){

        let id = this.state.id;
        let path = '/art/' + id;
       if (this.state.photos.length > 0) {
        return (
            <div className="outstandingNew">
              <Link to={{
                pathname: path,
                query: { id }
              }}>
    
                <h2>{this.state.title}</h2>
                <img src={"http://localhost:3000/images/" + this.state.photos[0].filename} alt={this.state.title} />
              </Link>
    
              <div className="subhead">{this.state.createdAt + "  || "}
              </div>
            </div>
          );
            } else {
                return(
                   <h1>Cargando...</h1>
                );
            }
       
   }

}
export default ArticleInSectionGrid;