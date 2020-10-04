// 🐨 you'll need to import React and ReactDOM up here
import React from 'react'
import ReactDOM from 'react-dom'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
const Bookshelf = () => {
  return (
    <React.Fragment>
      <Logo width="40" height="40" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => console.log('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => console.log('register')}>Register</button>
      </div>
    </React.Fragment>
  )
}
// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
function App() {
  return <div>Hello</div>
}

ReactDOM.render(<Bookshelf />, document.getElementById('root'))
