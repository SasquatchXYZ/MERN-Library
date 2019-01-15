import React from 'react';

function BookResults(props) {

  // console.log(props);
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-12">
        {props.results.map(book => (
          <div className="card" id={book.id} key={book.id}>
            <div className="media">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                className="align-self-center mr-3" alt="testing"/>
              <div className="media-body">
                <h5 className="mt-0">{book.volumeInfo.title}</h5>
                <p>{book.volumeInfo.description}</p>
                <p className="mb-0">{book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : 'No Listed Author'}</p>
                <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">View Book</a>
                <button className="btn btn-success" onClick={props.saveBook} id={book.id}>Save Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookResults;