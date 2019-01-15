import React from 'react';

function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="book-search">Search:</label>
                <input type="text" className="form-control" id="book-search"
                       placeholder="Book Title"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;