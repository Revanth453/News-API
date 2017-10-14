    import React from 'react';

    export default function Article (props) {
      return (
        <div className="container-fluid">
          <h3><a href={props.url}>{props.title}</a></h3>
          <img className="img-thumbnail"src={props.urlToImage} alt={props.title} />
          <h3>By {props.author}</h3>
          <h4>{props.description}</h4>
          <hr />
        </div>
      )
    }
