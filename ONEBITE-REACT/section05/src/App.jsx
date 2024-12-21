import './App.css'
import Even from './components/Even'
import { useState, useEffect , useRef} from 'react'


function App() {
  const [count , setCount] = useState(0)
  // const [input , setInput] = useState("")
  
  const isMount = useRef(false)
  
  useEffect(() =>{console.log('마운트 완료');
  } , [])
  useEffect(() =>{
    if (!isMount.current) {
      isMount.current = true
      return
    }
    console.log('업데이트');
  } )
  useEffect(() =>{console.log(`${count}`);
  } , [count ])

  const onClickButton = () =>{
    console.log("ee");
    setCount(count+1);
  }

  return (
    <>
      <h1>{count}</h1>
      {count % 2 === 0 ? <Even/> : null}
      <button onClick={()=>{onClickButton}}>+</button>
      <hr />
    </>
  )
}

export default App
