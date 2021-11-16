import React from 'react';
import axios from "axios";
import Article from './article';
import Column from './column';
import Header from './header';
import CategorySelect from './categorySelect';

const url = "http://localhost:3000/";
class Principal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer:"",
            articles : [],
            authors :[],
            columns :[],
            categories : []

        }
       
        }
    componentDidMount (){
        this.get_news();

    }    
    async get_news () {
      let content = await axios.get(url);
      this.setState({
          timer : content.data.timer,
          articles : content.data.articles,
          authors : content.data.authors,
          columns : content.data.columns,
          categories : content.data.categories
      });
      console.log("principal", this.state)
    

    }    
     

    render(){
        if (this.state.articles ==null) {
            return (<h1>Cargando</h1>);
        } else {
            return  (
            <div className="front">
                <CategorySelect {...this.state.categories} ></CategorySelect>
                <Header {...this.state.timer}></Header>
                <div className="content">
                  {this.state.articles.map(a =><div className="article "><Article {...a}></Article></div>)}
                  {this.state.columns.map(c =><div className="column"><Column {...c}></Column></div> )}
                </div>  

            </div>);    
        } 
    }   
    }
    

export default Principal;    