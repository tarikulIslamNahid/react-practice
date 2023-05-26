import React from 'react'
const Movie = ({data}) => {
  return (
          <div className="card">
              <img src={data.Poster} alt="" />
              <div className="card-body">
              <h3 className="title">{data.Title}</h3>
                  <p className="year">{data.Year}</p>
              </div>
     </div>
  )
}

export default Movie
