import React, { useState,useRef,useContext} from 'react'
import './Editor.css'
import { TodoContext } from '../App'

const Editor = () => {
  const {onCreate} = useContext(TodoContext)
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }
  return (
    <div className='Editor'>
      <input
      ref={contentRef}
      value={content} 
      onChange={onChangeContent}
      placeholder='새로운 Todo...'
      onKeyDown={onKeyDown} />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor