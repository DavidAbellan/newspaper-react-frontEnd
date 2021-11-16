import React from "react";
import Category from "./articleCategoryButton";
  
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
                                <div className="normalNew">
                                <img src ={"http://localhost:3000/images/"+this.state.photo.filename}  alt={this.state.title}/>
                                <h5>{this.state.title}</h5>

                                </div>

                   );

                }
            }}
    

export default article;