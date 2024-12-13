import { useState, useRef, useReducer,useCallback, createContext} from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
// import Exam from './components/Exam'

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

  function reducer(state, action) {
    switch(action.type){
      case 'CREATE' : 
        return [action.data, ...state];
      case "UPDATE" :
        return state.map((item)=> item.id === action.targetId
          ? {...item, isDone : !item.isDone}
          : item       
          )
      case "DELETE" :
        return state.filter((item)=> item.id !== action.targetId)
      default :
        return state;
        }
  }
  export const TodoContext = createContext();


function App() {

  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3)
  const onCreate =useCallback( (content)=> {
      dispatch({
        type : "CREATE",
        data : {
            id : idRef.current++,
            isDone : false,
            content : content,
            date : new Date().getTime()
        }
      })
    
  },[])

  const onUpdate = useCallback( (targetId) => {
    //todos State의 값들 중에
    //targetId와 일치하는 ID를 갖는 투두 아이템의 isDone을 변경.
    dispatch({
      type : "UPDATE",
      targetId : targetId
    })
  },[])

 const onDelete = useCallback((targetId) =>{
  //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 요소
  dispatch({
    type : "DELETE",
    targetId : targetId
  })
},[] )

  return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
      <Editor />
      <List />
      </TodoContext.Provider>
      {/* <Exam /> */}
    </div>
  )
}

export default App