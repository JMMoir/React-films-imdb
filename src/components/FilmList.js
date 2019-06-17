import React from 'react';
import Film from './Film'

function FilmList(props){

  const filmNodes = props.data.map((film) => {
    return(
      <Film name={film.name} url={film.url} key={film.id} />
    )
  })

  return(
    <div>
    {filmNodes}

    <a href="https://www.imdb.com/calendar/?region=gb">
      <input type="button" value="See More" />
    </a>
    </div>
  )
}

export default FilmList;
