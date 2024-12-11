import React from 'react'
import { useState } from 'react'


function useInput() {
    const [input,setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return [input, onChange];
}

const HookExample = () => {
    const [input, onChange] = useInput();
    return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
}

export default HookExample
