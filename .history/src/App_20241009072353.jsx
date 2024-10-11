import { useState } from 'react'
import Form from './Form'
import Counter from "./Counter.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Form/>
    <Counter/>
    </>
  )
}

export default App
