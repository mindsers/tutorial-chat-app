import React from 'react'

export default function PrintDebug(value) {
  let text = ''
  try {
    text = JSON.stringify(value, null, 2)
  } catch(e) {
    text = JSON.stringify(e, null, 2)
  } 
  return (
    <pre style={{ textAlign: 'left'}}>
      {text}
    </pre>
  )
}