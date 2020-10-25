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
      <div  style={{paddingLeft:10}} className='page-container'>
        <h1 className="page-header">CREATE A LINK FOR YOUR FAKE NEWS</h1>
        <h4 className="page-header">Rickroll your friends in three easy steps.</h4>
        <form  style={{paddingLeft:30}} className='news-form'>
          <p>What's the headline?</p>
          <input
            type='text'
            onChange={this.headlineChangeHandler}
            placeholder="Headline"
            className='news-form-headline'
          />
          <p>And the topic?</p>
          <input
            type='text'
            onChange={this.topicChangeHandler}
            placeholder="Topic"
            className='news-form-topic'
          />
          <div>
          <br></br>
          <h3>Link to BREAKING NEWS</h3>
          <p className="news-string">{this.state.newstring}</p>
          <br></br>
          </div>
        </form>
      </div>
    )
  }
}

export default Homepage;
