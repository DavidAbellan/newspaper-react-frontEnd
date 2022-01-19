import React from "react";
import Category from "./articleCategoryButton";
import 'bootstrap/dist/css/bootstrap.min.css';
  
class article extends React.Component{
         constructor(props) {
             super(props);
             this.state = {
                 categories : [],
                 outstanding : false,
                 title:"",
                 author :"",
                 photo:"",
                 created:"",
                 id:""             }
         }
         componentDidMount(){
             this.setState (
                 {
                     outstanding : this.props.outstanding,
                     title: this.props.title,
                     author : this.props.author,
                     photo : this.props.photo,
                     created : this.props.created,
                     id : this.props.id,
                     categories : this.props.categories,

                 }
             );
             
         }


       render(){
                if(this.state.outstanding) {
                  if (this.state.title.length < 20) {
                   return (
                                <div className="outstandingNew">
                                <h2>{this.state.title}</h2>
                                <img src ={"http://localhost:3000/images/"+this.state.photo.filename}  alt={this.state.title}/>
                                <div className="subhead">{"@"+this.state.author+ "  " + this.state.created + "  || "}
                                <Category {...this.state.categories}></Category>
                                </div>
                                </div>
                           ); 
                  } else {
                    return (
                      <div className="outstandingNewMoreThan20">
                      <h2 >{this.state.title}</h2>
                      <div className="card-image small">
                      <img src ={"http://localhost:3000/images/"+this.state.photo.filename}  alt={this.state.title}/>
                      </div>
                      <div className="subhead">{"@"+this.state.author+ "  " + this.state.created + "  || "}
                      <Category {...this.state.categories}></Category>
                      </div>
                      </div>
                      );   
                  }  
        
                } else {
                    if (this.state.photo.size < 100000) {
                    
                   return (
                    <div className="card mb-3" style={{width: '945px', margin:'2em'}}>
                      <div className="row no-gutters">
                        <div className="newColumns">
                          <img className="new-image" alt = {this.state.title}src = {"http://localhost:3000/images/"+ this.state.photo.filename}/>
                          <div className="titleNew">
                            <h1 >{this.state.title}</h1>
                            
                          </div>
                      </div>
                        <div className="col-md-8">
                        </div>
                    </div>
                    </div>
                  );
                   } else {
                    return (
                      <div className="card mb-3" style={{width: '945px', margin:'2em'}}>
                        <div className="row no-gutters">
                          <div className="newColumns">
                            <img className="new-image" alt = {this.state.title}src = {"http://localhost:3000/images/"+ this.state.photo.filename}/>
                            <div className="titleNew">
                              <h1 className="bigImageNewh1" >{this.state.title}</h1>
                              
                            </div>
                        </div>
                          <div className="col-md-8">
                          </div>
                      </div>
                      </div>);

                   }

                }
            }}
    

export default article;