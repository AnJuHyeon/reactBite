import React, { useEffect } from 'react'


const Even = () => {
  // useEffect의 콜백함수를 클린업, 정리함수라 한다. useEffect가 끝날 때 실행된다.
  useEffect(()=>{
     
        return ()=>{
          console.log("unmount")
        }
    }
    ,[])
  return (
    <div>
      짝수입니다
    </div>
  )
}

export default Even
