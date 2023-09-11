import React from 'react'
import ReactDOM from 'react-dom/client'

const Greetings = () => {
  return (
    <div>
      <Person />
      <Message />
      <Name />
    </div>
  )
}

const Person = () => {
  return <h2>Ramprasad Pendmi</h2>
}

const Message = () => {
  return <p>Here is the message</p>
}

function Name() {
  return <h2>Hello Ram</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greetings />)
