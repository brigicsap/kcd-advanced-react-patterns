// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (allowedTypes.includes(child.type)) {
    // React.cloneElement() is useful when we want to add or modify the props of a parent component’s children while avoiding unnecessary duplicate code.
    // Modify children properties
    // Add to children properties
    // Extend the functionality of children components
      return React.cloneElement(child, {on, toggle})
    }

    return child
  })
}

const ToggleOn = ({on, children}) => on ? children : null
const ToggleOff = ({on, children}) => !on ? children : null
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />
// consumers can also take the implicitly shared state and use it in their own components
const MyToggleButton = ({on}) => on ? `button is ON` : `button is OFF`

// to not allow the above, we can add allowed types to restrict what components can be added
const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App
