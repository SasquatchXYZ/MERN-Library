import React from 'react';
import './style.css';

function Jumbotron(props) {
  return (
    <div className="container mt-4">
      <div className="jumbotron text-center text-white" style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}>
        <h1 className="display-4 title">{props.title}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-4"/>
        <p className="instructions">{props.instructions}</p>
      </div>
    </div>
  )
}

export default Jumbotron;