import React from "react";
import axios from "axios";
import Header from "./columnDetailHeader";
import Grid from "./articleDetailRelatedGrid";
import Footer from "./footer";
class ColumnDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            author: "",
            column: "",
            authorPhoto: "",
            related: []
        };
        this.url = "http://localhost:3000/col/";
        this.id = window.location.href.substring(26, window.location.href.length);
        this.id2 = (this.id).replace("http://localhost:3000/col/", "");
        this.getCol();
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
                    <Header></Header>
                    <div className="columnAuthorHeader">

                        <div className="columnAuthor" >
                            <h1>{this.state.author.name}</h1>
                            <p>{this.state.author.username} </p>
                        </div>
                        <div className="columnTitle">
                            <h1>{this.state.column.title}</h1>
                            <p>{this.state.column.highlights} </p>

                    <div className="columnDetailBody">
                        <div>
                            <p>{this.state.column.main_text}</p>
                        </div>
                    </div>
                        </div>
                    </div>

                    <div className="articleBottom">
                        <div >
                            <img alt={this.state.author.username} src={"http://localhost:3000/images/profiles/" + this.state.authorPhoto.filename} className="photoFootAuthor"></img>
                        </div>
                        <div className="articleBottomText">
                            <h1>{this.state.author.name}</h1>

                            <p>{this.state.author.description}</p>
                        </div>
                    </div>
                    <div>
                        <Grid {...this.state.related}></Grid>
                    </div>
                    <div>
                        <Footer></Footer>
                    </div>


                </div>

            );
        }
    }

    async getCol() {
        let content = await axios.get(this.url + this.id2);
        let related = await axios.get(this.url + "allfrom/" + content.data.author.id);

        /* hay que sacar el propio articulo de relacionados */
        this.setState({
            content: content.data,
            author: content.data.author,
            column: content.data.column,
            authorPhoto: content.data.authorPhoto,
            related: related.data.colums
        })



    }
}
export default ColumnDetail;
