import React from "react";
import Category from "./articleCategoryButton";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/*me parece que va a tener que convertirse en una funcion 
para poder user el get params en el detalle*/

function article(props) {
  let outstanding = props.outstanding;
  let title = props.title;
  let author = props.author;
  let photo = props.photo;
  let created = props.created;
  let id = props.id;
  let categories = props.categories;





  if (outstanding) {
    if (title.length < 20) {
      let path = '/art/' + id;
      return (
        <div className="outstandingNew">
          <Link to={{
            pathname : path,
            query : {id}
          }}>
            see more
          </Link>

          <h2>{title}</h2>
          <img src={"http://localhost:3000/images/" + photo.filename} alt={title} />
          <div className="subhead">{"@" + author + "  " + created + "  || "}
            <Category {...categories}></Category>
          </div>
        </div>
      );
    } else {
      return (
        <div className="outstandingNewMoreThan20">
          <h2 >{title}</h2>
          <div className="card-image small">
            <img src={"http://localhost:3000/images/" + photo.filename} alt={title} />
          </div>
          <div className="subhead">{"@" + author + "  " + created + "  || "}
            <Category {...categories}></Category>
          </div>
        </div>
      );
    }

  } else {
    if (photo.size < 100000) {

      return (
        <div className="card mb-3" style={{ width: '945px', margin: '2em' }}>
          <div className="row no-gutters">
            <div className="newColumns">
              <img className="new-image" alt={title} src={"http://localhost:3000/images/" + photo.filename} />
              <div className="titleNew">
                <h1 >{title}</h1>

              </div>
            </div>
            <div className="col-md-8">
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card mb-3" style={{ width: '945px', margin: '2em' }}>
          <div className="row no-gutters">
            <div className="newColumns">
              <img className="new-image" alt={title} src={"http://localhost:3000/images/" + photo.filename} />
              <div className="titleNew">
                <h1 className="bigImageNewh1" >{title}</h1>

              </div>
            </div>
            <div className="col-md-8">
            </div>
          </div>
        </div>);

    }

  }
}


export default article;