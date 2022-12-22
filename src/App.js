import { Message } from './message'
import { useState } from 'react'

import styles from './message.module.css'

export function App() {
  const [text, setText] = useState(0)

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <h1> Hello world!!!</h1>
      <h2 > Text Message: {text}</h2>
      <input type='text' onChange={handleChange} className={styles.border} />

      <Message textprops={text} />
    </>
  )
}

export default App