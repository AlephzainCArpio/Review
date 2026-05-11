import { useState } from 'react'

const Task4 = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{inputValue}</div>
    </div>
  )
}

export default Task4