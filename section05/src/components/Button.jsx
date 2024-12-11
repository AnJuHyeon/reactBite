import React from 'react'

// const Button = (props) => {
//   return (
//     <div>
//       <button style={{color : props.color}}>{props.text}-{props.color}</button>
//     </div>
//   )
// }
//값을 바로 받아와서 사용하는 방법.
const Button = ({text,color, children}) => {
    //이벤트 객체
    const onClickButton = (e) =>{
        console.log(e)
        console.log(text)
    }
    return (
      <div>
        <button
        onClick={onClickButton}
        style={{color : color}}>{text}-{color} {children}</button>
      </div>
    )
  }

Button.defaultProps = {
    color : "black",
}
export default Button
