import React, { useContext } from 'react'
import './TodoItem.css'
import { memo } from 'react'
import { TodoContext } from '../App'

const TodoItem = ({id,isDone,content,date}) => {
  
  const {onUpdate,onDelete} = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id)
  }

    return (
    <div className='TodoItem'>
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps)=>{
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true
// });