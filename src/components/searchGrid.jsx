import React from "react";
import axios from 'axios';
import { Row, Col } from "react-bootstrap";

const url = "http://localhost:3000/";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      name: ""
    }
    this.get_results = this.get_results.bind(this);
  }
  async get_results(event) {
    this.setState({
      name: event.target.value
    });
    let content = await axios.get(url + "search/" + this.state.name);

    this.setState({
      result: content
    })

  }
  render() {
    if (this.state.name.length > 3) {
      return (
        <div>
          <input type='text' value={this.state.name} onChange={this.get_results}></input>
          <MyModalWithGrid {...this.state.result.data.articles}></MyModalWithGrid></div>
      );
    } else {
      return (
        <div>
          <input type='text' value={this.state.name} onChange={this.get_results}></input>
        </div>
      );
    }
  }
};
function MyModalWithGrid(props) {
  let arrayProps = Object.values(props);
  let newProps = [];
  for (let i = 0; i < arrayProps.length; i++) {
    newProps.push(arrayProps[i]);
  }
  return (
    <div className="floatDiv">
      {newProps.map((a, k) => <div key={k} ><Row ><Col xs={12} md={8}><p className="searchText">{a.title}</p></Col></Row></div>)}
    </div>
  )
}


export default Search;



