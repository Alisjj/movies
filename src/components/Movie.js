import React from 'react';
import {useOutletContext, useParams} from 'react-router-dom';

function Movie() {
  const { id } =  useParams()
  const obj = useOutletContext()
  return (
    <div>Movie {id} {obj.hello} </div>
  )
}

export default Movie