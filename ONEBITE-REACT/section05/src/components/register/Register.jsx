import {useRef, useState } from "react"; // 수정
const Register =()=> {
    const [input , setInput] = useState({
        username :"이름입력",
        birth:"",
        country:"",
        bio:"",
    })

    const countRef = useRef(0);  // 수정
    const inputRef = useRef()  // 수정

    const onChange = (e) => {
        countRef.current++  // 수정
        console.log(countRef.current);  // 수정
        
        setInput({ 
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        if (input.username === "이름입력"){
            inputRef.current.focus()
        }
    }

    return (
        <div>
             {/* 수정 */}
            <input ref={inputRef} name="username" onChange={onChange} placeholder={input.username} />
            <h1>{input.username}</h1>
            <hr />
            <input name="birth" onChange={onChange} type="date" />
            <h3>{input.birth ? input.birth : "empty"}</h3>
            <hr />
            <div>
                <select name="country" onChange={onChange}>
                    <option value="">국적선택</option>
                    <option value="kr">한국</option>
                    <option value="en">미국</option>
                    <option value="ch">중국</option>
                </select>
                <h3>{input.country}</h3>
            </div>
            <textarea name="bio" onChange={onChange}></textarea>
            <h3>{input.bio}</h3>
            <hr />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default Register;