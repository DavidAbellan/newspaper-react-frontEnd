import React from "react";
import axios from "axios";
import HeaderS from "../components/detailHeader";
import Category from "./articleCategoryButtonInDetails";
import Footer from "../components/footer";
import Grid from '../components/articleDetailRelatedGrid';
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            content: [],
            photos: "",
            author: "",
            article: "",
            categories: [],
            posts:[],
            time: "",
            principalPhoto: "",
            morePhotos: false,
            firstHalf: "",
            secondHalf: "",
            secondPhoto: "",
            authorPhoto: ""
        }
        this.url = "http://localhost:3000/art/";
        this.id = window.location.href.substring(26, window.location.href.length);
        this.id2 = (this.id).replace("http://localhost:3000/art/", "");

        this.getNew();


    }
    
    moreThanAPicture() {
        this.setState({
            morePhotos: true
        })
        let halfOfArt =
            this.state.article.main_text.substring(0, this.state.article.main_text.length / 2);
        let halfTwoOfArt =
            this.state.article.main_text.substring(-this.state.article.main_text.length / 2);
        this.setState({
            firstHalf: halfOfArt,
            secondHalf: halfTwoOfArt,
            secondPhoto: this.state.photos[1].filename
        })
    }
    bowdlerize() {
        let bowd = [];
        for (let section of this.state.posts) {
            if (Array.isArray(section)) {
            for (let art of section) {
                if (art.id !== this.state.id) {
                    bowd.push(art);
                }

            }}
            else{
                bowd.push(section);
            }
      

        }
        let hash = {};
        let result = bowd.filter(o => hash[o.id] ? false : hash[o.id] = true);
        let resultFiltered =[];
        for (let register of result) {
            if (typeof register === 'object'){
                resultFiltered.push(register);
            }
        }
        this.setState({
            posts: resultFiltered
        })
    }

    async getNew() {
        let content = await axios.get(this.url + this.id2);
        this.setState({
            content: content.data,
            id: content.data.article.id,
            author: content.data.author,
            article: content.data.article,
            categories: content.data.categories,
            time: content.data.time,
            posts: content.data.posts,
            photos: content.data.photos,
            principalPhoto: content.data.photos[0].filename,
            authorPhoto: content.data.authorPhoto.filename
        })
        if (this.state.photos.length > 1) {
            this.moreThanAPicture();
        }
        this.bowdlerize();
       
    }
   
    render() {
        if (this.state.content == null) {
            return (
                <div>
                    <h1>cargando...</h1>
                </div>
            );
        } else if (this.state.morePhotos) {
            if (this.state.posts.length > 0){  
            return (
                <div>
                    <HeaderS></HeaderS>
                    <div className="detailTitle">
                    <h1 >
                    
                        {this.state.article.title}
                    </h1>
                    </div>
                    <div className="articleDetailPhoto">
                        <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.principalPhoto}></img>
                    </div>
                    <div className="subhead">{"por " + this.state.author.name + "  " + this.state.time + "  || "}
                        {this.state.categories.map((a, k) => <Category key={k} {...a}></Category>)}
                    </div>
                    <div className="textBlock">
                        <p>
                            {this.state.firstHalf}
                        </p>
                    </div>
                    <div>
                        <div className="articleDetailPhoto">
                            <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.secondPhoto}></img>
                        </div>
                    </div>
                    <div className="textBlock">
                        <p>
                            {this.state.secondHalf}
                        </p>
                    </div>
                    <div className="articleBottom">
                        <img alt={this.state.article.title} src={"http://localhost:3000/images/profiles/" + this.state.authorPhoto} className="photoFootAuthor"></img>
                        <div className="articleBottomText">

                        <h1>{this.state.author.name}</h1>
                        <p>{this.state.author.description}</p>
                        </div>
                    </div>
                    <div>
                    <Grid {...this.state.posts}></Grid>

                    </div>
                    <Footer></Footer>
                </div>
            );
            }else{
                return (
                    <div>
                        <HeaderS></HeaderS>
                        <div  className="detailTitle">
                        <h1>
                            {this.state.article.title}
                        </h1>
                        </div>
                        <div className="articleDetailPhoto">
                            <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.principalPhoto}></img>
                        </div>
                        <div className="subhead">{"por " + this.state.author.name + "  " + this.state.time + "  || "}
                            {this.state.categories.map((a, k) => <Category key={k} {...a}></Category>)}
                        </div>
                        <div className="textBlock">
                            <p>
                                {this.state.firstHalf}
                            </p>
                        </div>
                        <div>
                            <div className="articleDetailPhoto">
                                <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.secondPhoto}></img>
                            </div>
                        </div>
                        <div className="textBlock">
                            <p>
                                {this.state.secondHalf}
                            </p>
                        </div>
                        <div className="articleBottom">
                            <img alt={this.state.article.title} src={"http://localhost:3000/images/profiles/" + this.state.authorPhoto}  className="photoFootAuthor"></img>
                            <div className="articleBottomText">

                            <h1>{this.state.author.name}</h1>
                            <p>{this.state.author.description}</p>
                            </div>
                        </div>
                        <div>
                         <h2>No existen artículos relacionados</h2>
                        </div>
                        <Footer></Footer>
                    </div>);

            }
        } else {
            if (this.state.posts.length > 0){ 
            return (

                <div>
                    <HeaderS></HeaderS>
                    <div  className="detailTitle">
                    <h1 >
                        {this.state.article.title}
                    </h1>
                    </div>
                    <div className="articleDetailPhoto">
                        <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.principalPhoto}></img>
                    </div>
                    <div className="subhead">{"por " + this.state.author.name + "  " + this.state.time + "  || "}
                        {this.state.categories.map((a, k) => <Category key={k} {...a}></Category>)}
                    </div>
                    <div className="textBlock">
                        <p>
                            {this.state.article.main_text}
                        </p>
                    </div>
                    <div className="articleBottom">
                        <img alt={this.state.article.title} src={"http://localhost:3000/images/profiles/" + this.state.authorPhoto}  className="photoFootAuthor"></img>
                        <div className="articleBottomText">

                        <h1>{this.state.author.name}</h1>
                        <p>{this.state.author.description}</p>
                        </div>
                    </div>
                    <div>
                    <Grid {...this.state.posts}></Grid>

                    </div>
                    <Footer></Footer>

                </div>
            );}else{
                return (

                    <div>
                        <HeaderS></HeaderS>
                        <div  className="detailTitle">
                        <h1>
                            {this.state.article.title}
                        </h1>
                        </div>
                        <div className="articleDetailPhoto">
                            <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.principalPhoto}></img>
                        </div>
                        <div className="subhead">{"por " + this.state.author.name + "  " + this.state.time + "  || "}
                            {this.state.categories.map((a, k) => <Category key={k} {...a}></Category>)}
                        </div>
                        <div className="textBlock">
                            <p>
                                {this.state.article.main_text}
                            </p>
                        </div>
                        <div className="articleBottom">
                            <img alt={this.state.article.title} src={"http://localhost:3000/images/profiles/" + this.state.authorPhoto}  className="photoFootAuthor"></img>
                            <div className="articleBottomText">
                              <p>{this.state.author.name}</p>
                              <p>{this.state.author.description}</p>
                            </div>  
                        </div>
                        <div>
                           <h2>No hay relacionados</h2>
                        </div>
                        <Footer></Footer>
    
                    </div>
                );

            }



        }
    }




}
export default Detail;