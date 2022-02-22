import React from "react";
import axios from "axios";
import Article from "./articleCategoryInSectionGrid";
import loadingGif from '../loading.gif';
import Columns from './columnsGrid';


class PrincipalAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            articles: [],
            columns : []
        }
        this.url = "http://localhost:3000/author/";
        this.id = window.location.href.substring(27, window.location.href.length);
        this.id2 = (this.id).replace("http://localhost:3000/author/", "");
        this.getRelated();

    }
    async getRelated() {
        let cont = await axios.get(this.url + this.id);
        if (Array.isArray(cont.data.related)) {
            let arts = [];
            let cols = [];
            cont.data.related.map(a => {
                if (a !== null) {
                    if (a.highlights !== undefined) {
                        cols.push(a);
                    }
                    else {
                        arts.push(a);
                    }
                }
                return (
                    this.setState({
                        articles: arts,
                        columns :cols,
                        content : cont.data.related
                    }
                    ));
            });
        }

    }


    render() {
        if (this.state.content.length === 0) {
            return (
                <div><img src={loadingGif} alt='now loading' /></div>
            );
        } else if ( this.state.articles.length !== 0) {
            return (
                <div>
                    {this.state.articles.map((a, k) => <Article key={k} {...a} ></Article>)}
                    <Columns {...this.state.columns}></Columns> 
                </div>

            );
        } else {
            <Columns {...this.state.columns}></Columns>
        }
    }

}
export default PrincipalAuthor;