import React from 'react';
import './style.css';

function BookResults(props) {
  // console.log(props);
  return (
    <div className="row mb-5">
      <div className="col-lg-12">
        {props.books.map(book => (
          <div className="card mt-4" id={book.id} key={book.id}>
            <div className="card-body">
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.volumeInfo.subtitle}</h6>
              <div className="media">
                <img
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png'
                  }
                  className="align-self-center mr-3" alt="testing"/>
                <div className="media-body">
                  <h6 className="mt-0">{
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(' ')
                      : 'No Listed Author'
                  }</h6>
                  <p className="mb-0">{book.volumeInfo.description}</p>
                  <p className="mb-0">
                    <small className="text-muted">{book.volumeInfo.pageCount} pages.</small>
                  </p>
                  <p className="mb-2">
                    <small className="text-muted">Published: {book.volumeInfo.publishedDate}</small>
                  </p>
                </div>
              </div>
              <a className="btn btn-primary mr-1 mt-2" href={book.volumeInfo.canonicalVolumeLink} target="_blank"
                 rel="noopener noreferrer">View Book</a>
              <button className={props.buttonType} onClick={props.buttonAction} id={book.id}>{props.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookResults;