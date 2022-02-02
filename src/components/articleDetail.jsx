import React from "react";
import axios from "axios";
import HeaderS from "../components/detailHeader";
import Category from "./articleCategoryButtonInDetails";
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            photos: "",
            author: "",
            article: "",
            categories: [],
            posts: "",
            time: "",
            principalPhoto: "",
            morePhotos: false,
            firstHalf: "",
            secondHalf: "",
            secondPhoto: "",
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

    async getNew() {
        let content = await axios.get(this.url + this.id2);
        this.setState({
            content: content.data,
            author: content.data.author,
            article: content.data.article,
            categories: content.data.categories,
            time: content.data.time,
            posts: content.data.posts,
            photos: content.data.photos,
            principalPhoto: content.data.photos[0].filename
        })
        if (this.state.photos.length > 1) {
            this.moreThanAPicture();
        }


    }
    render() {
        if (this.state.content == null) {
            return (
                <div>
                    <h1>cargando...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <HeaderS></HeaderS>
                    <div className="articleDetailPhoto">
                        <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.principalPhoto}></img>
                    </div>
                    <div className="subhead">{"por " + this.state.author.name + "  " + this.state.time + "  || "}
                        {this.state.categories.map((a, k) => <Category key={k} {...a}></Category>)}
                    </div>
                    <div>
                        <p>
                            {this.state.firstHalf}
                        </p>
                    </div>
                    <div>
                        <div className="articleDetailPhoto">
                            <img alt={this.state.article.title} className="articleDetailimage" src={"http://localhost:3000/images/" + this.state.secondPhoto}></img>
                        </div>
                    </div>
                    <div>
                        <p>
                            {this.state.secondHalf}
                        </p>
                    </div>
                </div>
            );


        }
    }




}
export default Detail;