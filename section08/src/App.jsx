import { useState, useRef } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  }
]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)
  const onCreate = (content)=> {
    const newTodo = {
      id :idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => {
    //todos State의 값들 중에
    //targetId와 일치하는 ID를 갖는 투두 아이템의 isDone을 변경.

    setTodos(todos.map((todo)=> {
      if(todo.id === targetId){
      return {
        ...todo,
        isDone : !todo.isDone
      }
    }
      return todo
    }))
  }

  const onDelete = (targetId) =>{
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 요소
    setTodos(todos.filter((todo)=>todo.id !== targetId));
  } 

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}  />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App