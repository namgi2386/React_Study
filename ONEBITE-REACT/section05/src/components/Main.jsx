import "./Main.css";

const Main = () => {
    const user = {
        name : "굿",
        islogin : true
    }
    if (user.islogin) {
        return <div className="logout">로그아웃2</div>
    } else {
        return <div>로그인2</div>
    }
}
export default Main;