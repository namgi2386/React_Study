import "./App.css";
import { useState,useRef } from "react";
import Header from "./components/header/Header";
import Editor from "./components/editor/Editor";
import List from "./components/list/List";

const mockData = [
  {
    id : 0,
    isDone : false ,
    content : "임시1",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false ,
    content : "임시2",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false ,
    content : "임시3",
    date : new Date().getTime(),
  }
]

function App() {
  const [todos , setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false ,
      content : content,
      date : new Date().getTime(),
    }
    setTodos([newTodo , ...todos])
  }
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;