import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputstring: "",
      newstring: "https://the-times-news.web.app/",
      topic:"local",
    };
  }

  headlineChangeHandler = (event) => {
    this.setState({inputstring: event.target.value});
    this.setState({newstring: "https://the-times-news.web.app/"+this.state.topic+"/"+this.state.inputstring,
  })
}
topicChangeHandler = (event) => {
  this.setState({topic: event.target.value});
  this.setState({newstring: "https://the-times-news.web.app/"+this.state.topic+"/"+this.state.inputstring,
})
}

  render() {
    return(
      <div  style={{paddingLeft:10}}>
        <h1>CREATE A LINK FOR YOUR FAKE NEWS!!</h1>
        <form  style={{paddingLeft:30}}>
          <p>Enter the breaking news headline :</p>
          <input
            type='text'
            onChange={this.headlineChangeHandler}
          />
          <p>Enter the topic :</p>
          <input
            type='text'
            onChange={this.topicChangeHandler}
          />
          <div>
          <br></br>
          <h3>Copy this link and forward it to your friends ASAP!!</h3>
          <span>{this.state.newstring}</span>
          </div>
        </form>
      </div>
    )
  }
}

export default Homepage;
