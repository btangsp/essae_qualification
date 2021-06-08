import React from 'react'

import './css/components.css'


/*******************************************************************************
Components
*******************************************************************************/


export function Audio({ name, file }) {
  return (
    <audio className='audio-single' controls>
      <source src={`user-studies/${name}/audio/${file}`} type='audio/mpeg'/>
    </audio>);
};
