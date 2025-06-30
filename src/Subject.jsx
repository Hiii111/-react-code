import React, { useContext } from 'react'
import { SubjectContext } from './ContextData';

export default function Subject() {
 const subject = useContext(SubjectContext);
  return (
    <div style={{backgroundColor : 'skyblue', padding: '10px'}}>
      <h1>Subject Component : { subject }</h1>
    </div>
  )
}
