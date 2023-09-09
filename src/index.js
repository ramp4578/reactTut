import React from 'react'
import ReactDOM from 'react-dom/client'

const Greeting = () => {
  return <h1>My First comp</h1>
}

function name() {
  return <h2>Hello Ram</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
