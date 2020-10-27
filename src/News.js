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
    <div className="page-container " >
      <h1 class='page-header'>
        BREAKING NEWS!
      </h1>
      <iframe width="1400"
      height="750"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

      <div style={phantom} />
      <div style={style}>
        <Link to="/">
          Click Here to send your friends some breaking news
        </Link>
      </div>      </div>
    )
  }
}

export default News;
