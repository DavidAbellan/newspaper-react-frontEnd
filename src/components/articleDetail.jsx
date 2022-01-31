import React from "react";
import axios from "axios";
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: "",
            author: "",
            article: "",
            categories: "",
            posts: "",
            time: ""
        }
        this.url = "http://localhost:3000/art/";
        this.id = window.location.href.substring(26, window.location.href.length);
        this.id2 = (this.id).replace("http://localhost:3000/art/", "");

        this.getNew();

    }

    async getNew() {
        let content = await axios.get(this.url + this.id2);
        this.setState({
            author: content.data.author,
            article: content.data.article,
            categories: content.data.categories,
            time: content.data.time,
            posts: content.data.posts,
            photos: content.data.photos
        })

    }


    render() {
        return (
            <h1>ENTRA</h1>
        )
    }




}
export default Detail;