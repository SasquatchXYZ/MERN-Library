import React from 'react';
import './style.css';

function Bookshelf(props) {
  // console.log(props);
  return (
    <div className="row mb-5">
      <div className="col-lg-12">
        {props.books.map(book => (
          <div className="card mt-4" key={book._id}>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.subtitle}</h6>
              <div className="media">
                <img src={book.thumbnail}
                     className="align-self-center mr-3" alt="testing"/>
                <div className="media-body">
                  <h6 className="mt-0">{book.author}</h6>
                  <p className="mb-0">{book.description}</p>
                  <p className="mb-0">
                    <small className="text-muted">{book.pageCount} pages.</small>
                  </p>
                  <p className="mb-2">
                    <small className="text-muted">Published: {book.publishedDate}</small>
                  </p>
                </div>
              </div>
              <a className="btn btn-primary mr-1 mt-2" href={book.link} target="_blank"
                 rel="noopener noreferrer">View Book</a>
              <button className="btn btn-danger mt-2" onClick={props.deleteBook} id={book._id}>Delete Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf;