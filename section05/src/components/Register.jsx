import React, { useState, useRef } from 'react'

const Register = () => {
  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : ""
  })

  const countRef = useRef(0);
  const inputRef = useRef();
  const onChange = (e) =>{
    countRef.current++;
    console.log(countRef.current);
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
  }
  const onSubmit = () =>{
    if(input.name === ""){
    inputRef.current.focus();
    }
  }
  
    return (
<div>
    <div>
      <input name="name"
             ref ={inputRef}
             value={input.name}
             onChange={onChange} 
             type="text" 
             placeholder={'이름'}/>
    </div>
    <div>
      <input name="birth"
             value={input.birth}
             onChange={onChange} 
             type="date" />
    </div>
    <div>
        <select 
        name ="country"
        onChange={onChange}
        value={input.country}>
            <option value="한국">한국</option>
            <option value="일본">일본</option>
            <option value="미국">미국</option> 
        </select>
    </div>
    <div>
        <textarea name="bio"
                  value={input.bio}
                  onChange={onChange} />
    </div>

    <button onClick={onSubmit}>제출</button>
 </div>
  )
}

export default Register
