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
  constructor(props) {
    super(props);
    this.state = {
      timer: "",
      pages: [],
      articles: [],
      authors: [],
      columns: [],
      categories: [],
      call: 0,
      hasMore: true,
      searchResults: []
    }

    this.get_news();
  }

  async get_news() {
    const content =
      this.state.pages.length === 0
        ? await axios.get(url)
        : await axios.get(`${url}&page=${this.state.call}`)

    this.state.pages.push({
      articles: content.data.articles,
      columns: content.data.columns
    })
            
    this.setState({
      timer: content.data.timer,
      authors: content.data.authors,
      categories: content.data.categories
    });     

    this.setState({ call: Number(this.state.call) + 10 })

    if (this.state.pages[this.state.pages.length - 1].articles.length < 10) {
      this.setState({
        hasMore: false
      })
    }
  }
  
  render() {
    if (this.state.pages.length ===0) {
      return (<h1>Loading...</h1>);
    } else {
      return (
        <div className="front">
          <CategorySelect {...this.state.categories} ></CategorySelect>
          <SearchBox></SearchBox>
          <Header {...this.state.timer}></Header>
          <InfiniteScroll
            dataLength={this.state.pages.length}
            next={() => this.get_news()}
            hasMore={this.state.hasMore}
            loader={<p>    The End¿?</p>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p> }>
            <div>
            {
              this.state.pages.map((page, k) =>{ 
                return( <div key={k} className='content'>
                  { page.articles.map((a, k) => <div key={k} className="article" ><Article  {...a}></Article></div>) }
                  { page.columns.map((c, k) => <div key={k} className="column" ><Column  {...c}></Column></div>) }                
                </div>);
              })
            }
            </div>
          </InfiniteScroll>
          <Footer></Footer>
        </div>);
    }
  }
}


export default Principal;    