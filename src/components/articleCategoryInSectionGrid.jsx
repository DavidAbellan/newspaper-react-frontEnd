import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import url from "../backend";


class ArticleInSectionGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      createdAt: props.createdAt,
      main_text: props.main_text,
      author_id: props.author_id,
      outstanding: props.outstanding,
      id: props.id,
      updatedAt: props.updatedAt,
      photos:[]
    }
    this.setPhotos(this.state.id);
  }
  

  async setPhotos(id) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let fecha = new Date( this.state.createdAt)  
    let photos = await axios.get(url.getPicture + id);
    this.setState({
      photos: photos.data.articles[0].photo,
      createdAt : String(dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear())

    })

 }
 

 


  render() {

    let id = this.state.id;
    let path = '/art/' + id;
    if (Array.isArray(this.state.photos)) {
      return (

        <div className="content">
          <Link to={{
            pathname: '/'
          }}>
            <p>volver al principal</p>
          </Link>
          <div className="outstandingNewCategories">
            <Link to={{
              pathname: path,
              query: { id }
            }}>

              <h2 className="categoriesTitle">{this.state.title}</h2>
              <img src={this.state.photos.path} alt={this.state.title} className="photoPrincipalOutstanding" />
            </Link>

            <div className="subhead">{this.state.createdAt + "  || "}
            </div>
          </div>
        </div>
      );
    } else if (this.state.photos instanceof Object) {
      return (

        <div className="content">
          <Link to={{
            pathname: '/'
          }}>
            <p>volver al principal</p>
          </Link>
          <div className="outstandingNewCategories">
            <Link to={{
              pathname: path,
              query: { id }
            }}>

              <h2 className="categoriesTitle">{this.state.title}</h2>
              <img src={this.state.photos.path} alt={this.state.title} className="photoPrincipalOutstanding" />
            </Link>

            <div className="subhead">{this.state.createdAt + "  || "}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Cargando...</h1>
      );
      
    }

  }

}
export default ArticleInSectionGrid;