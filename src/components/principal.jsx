import React from 'react';
import axios from "axios";
import Article from './article';
import Column from './column';
import Header from './header';
import CategorySelect from './categorySelect';
import Footer from './footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBox from './searchGrid'; 

const url = "http://localhost:3000/";

class Principal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer:"",
            articles : [],
            authors :[],
            columns :[],
            categories : [],
            call :0,
            hasMore: true,
            searchResults : []

           

        }
        this.get_news();

        }
    
    async get_news () {
      let content 
      if (this.state.call !== 0){
        content = await axios.get(url+"&page="+ this.state.call);
      }  else {
        content = await axios.get(url);  
      }
      if (this.state.articles.length === 0){
      this.setState({
          timer : content.data.timer,
          articles : content.data.articles,
          authors : content.data.authors,
          columns : content.data.columns,
          categories : content.data.categories
      });} else {
        this.setState({
          articles: [...this.state.articles,...content.data.articles],
          columns: [...this.state.columns,...content.data.columns],
        })
      }
      this.setState({call : Number(this.state.call) + 10 })
      if (this.state.articles.length < 10){
        this.setState({
          hasMore : false
        })
      }
    }    
   render(){
        if (this.state.articles ==null) {
            return (<h1>Loading...</h1>);
        } else  {
            return  (
            <div className="front">
                <CategorySelect {...this.state.categories} ></CategorySelect>
                <SearchBox></SearchBox>
                <Header {...this.state.timer}></Header>
                  <InfiniteScroll
                dataLength={this.state.articles.length + this.state.columns.length} 
                next={()=> this.get_news()}
                hasMore={this.state.hasMore}
                loader={<p>    The End¿?</p>}
                endMessage={
                  <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div className="content">
                     {this.state.articles.map((a,k) =><div key={k} className="article" ><Article  {...a}></Article></div>)}
                </div> 
                 <div className="columnFormat">  
                     {this.state.columns.map((c,k) =><div  key={k} className="column"><Column {...c}></Column></div> )}
                </div> 
                  </InfiniteScroll> 
                  <Footer></Footer>  
            </div>);    

        } 
    }   
    }
    

export default Principal;    