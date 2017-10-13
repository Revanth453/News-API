    import React from 'react';

    export default function Article (props) {
      return (
        <div>
          <h3><a href={props.url}>{props.title}</a></h3>
          <img src={props.urlToImage} />
          <p>by {props.author}</p>
          <p>{props.description}</p>
          <hr />
        </div>
      )
    }
