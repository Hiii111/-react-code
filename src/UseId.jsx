import React, { useId } from 'react'

export default function UseId() {
    const uniqueId = useId();
  return (
    <div>
      <h1>Unique Id :-{uniqueId}</h1>
    </div>
  )
}
