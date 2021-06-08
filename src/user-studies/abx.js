import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Audio } from '../components'

import '../css/user-studies.css'


export default function ABX() {
  return (
    <div className='section'>
      <ReactMarkdown source={'Please listen to the following audio.'}/>
      <Audio name={'test-abx'} file={'sitting.mp3'}/>
    </div>
  );
}
