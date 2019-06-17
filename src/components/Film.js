import React from 'react';

function Film(props){
  return(
    <div>
      <ul>
        <li>
          <a href={props.url} >{props.name}</a>
        </li>
      </ul>
    </div>
  )
}

export default Film;
