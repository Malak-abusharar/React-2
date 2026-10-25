import './App.css'
import { useState } from "react";
function App() {

    const [filed, setFiled] = useState("React.js");
    const [level, setLevel] = useState("Senior");
    const [count, setCount] = useState(0);
    const changeLevel = () => {
      setLevel("mid")
    }
    
  return (
    <>
    <h1>My feiled is {filed}</h1>
    <button onClick={() => setFiled("Vue")}>Change Feild</button>
    <br/>
    <br/>
    <h1>I am a {level}</h1>
    <button onClick={changeLevel}>Change Level</button>
    <br/>
    <br/>
    <button onClick={() => setCount(count+10)}>Counter {count}</button>
    </>
  )
}

export default App
