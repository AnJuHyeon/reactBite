import "./Main.css"
const Main = ()=> {
    const user = {
        name : "안주현",
        isLogin : false,
    };
    return(
        <main>
            {user.isLogin ? <div style={{backgroundColor : "red"}}>로그아웃</div> 
            : <div className="login">로그인</div>}
        </main>
    )
}

export default Main;