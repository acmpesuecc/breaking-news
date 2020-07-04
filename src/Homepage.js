import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputstring: "",
      newstring: "https://the-times-news.web.app/",
      topic:"local",
    };
  }

  handleChange = (e) => {
    var txt = e.target.value;
    var ssss = "";
    for(var i=0;i<txt.length;i++){
      if(txt[i] == " "){
        ssss+="-";
      }
      else{
        ssss+=txt[i];
      }
    }

    this.setState({
      [e.target.id]:ssss,
      newstring: "https://the-times-news.web.app/"+this.state.topic+"/"+this.state.inputstring,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return(
      <div >
        <form onSubmit ={this.handleSubmit}>
          <label>Enter the breaking news headline</label>
          <input type="textbox" id="inputstring" onChange={this.handleChange}></input>
          <br/>
          <label>Enter the topic</label>
          <input type="textbox" id="topic" onChange={this.handleChange}></input>
          <br/>
          <div>{this.state.newstring}</div>
          <button value="Copy">Copy Link</button>
        </form>
      </div>
    )
  }
}

export default Homepage;
