import './App.css'
import { useState } from "react";
function App() {

    const [filed, setFiled] = useState("React.js");
    const [level, setLevel] = useState("Senior");
  
  return (
    <>
    <h1>My feiled is {filed}</h1>
    <button onClick={() => setFiled("Vue")}>Change Feild</button>
    <br/>
    <br/>
    <h1>I am a {level}</h1>
    <button onClick={() => setLevel("mid")}>Change Level</button>
    </>
  )
}

export default App
