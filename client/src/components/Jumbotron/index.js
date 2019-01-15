import React from 'react';

function Jumbotron(props) {
  return (
    <div className="container mt-4">
      <div className="jumbotron text-center" style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}>
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-4"/>
        <p>{props.instructions}</p>
      </div>
    </div>
  )
}

export default Jumbotron;