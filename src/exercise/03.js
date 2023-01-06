// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={[on, toggle]} {...props}/>
}

// 🐨 we'll still get the children from props (as it's passed to us by the
// developers using our component), but we'll get `on` implicitly from
// ToggleContext now

const useToggle = () => {
  const context = React.useContext(ToggleContext)
  if (!context) throw Error('Oh dear')

  return context
}

function ToggleOn({children}) {
  const [on] = useToggle()
  return on ? children : null
}

function ToggleOff({children}) {
  const [on] = useToggle()
  return on ? null : children
}

function ToggleButton(props) {
  const [on, toggle] = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App
