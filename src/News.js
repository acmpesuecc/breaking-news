import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';


var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}

class News extends Component {
  render() {
    return(
    <div>

    <ReactPlayer
      url="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
      playing={true}
      muted={false}
      width="100%"
      height="100%"

    />

      <div style={phantom} />
      <div style={style}>
      To create your own fake news link 
      <Link to="/">
        <button>Click Here!!</button>
      </Link>
      </div>
      </div>
    )
  }
}

export default News;
