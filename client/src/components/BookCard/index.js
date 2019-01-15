import React from 'react';

function BookResults(props) {
  console.log(props);
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-12">
        {props.results.map(book => (
          <div className="card">
            <div className="media">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                className="align-self-center mr-3" alt="testing"/>
              <div className="media-body">
                <h5 className="mt-0">{book.volumeInfo.title}</h5>
                <p>{book.volumeInfo.description}</p>
                <p className="mb-0">{book.volumeInfo.authors}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookResults;