import { useState } from 'react'
const Bulb = () => {
    const [light , setLight] = useState("on")
    return (
        <div>
        {light == "on" ? <h1 style={{backgroundColor: "orange"}}>on</h1> : <h1 style={{backgroundColor: "gray"}}>off</h1>}
        <button onClick={()=>{setLight(
        light === "off" ? "on" : "off"
        )}}>
        {light=== "off" ? "켜기" : "끄기"} 
        </button>
    </div>
    )
}
export default Bulb;