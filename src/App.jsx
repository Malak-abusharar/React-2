import './App.css'
import { useState } from "react";
import "./theme.css";
import { FaMoon, FaRegSun } from "react-icons/fa6";



function App() {

    const [filed, setFiled] = useState("React.js");
    const [level, setLevel] = useState("Senior");
    const [count, setCount] = useState(0);
    const changeLevel = () => {
      setLevel("mid")
    }
    // const theme = "dark"
    const [theme, setTheme] = useState("");
  return (
    <div className={`App ${theme}`}>
    <h1>My feiled is {filed}</h1>
    <button onClick={() => setFiled("Vue")}>Change Feild</button>
    <br/>
    <br/>
    <h1>I am a {level}</h1>
    <button onClick={changeLevel}>Change Level</button>
    <br/>
    <br/>
    <button onClick={() => setCount(count+10)}>Counter {count}</button>
    <br/>
    <br/>
    <div>
      <button onClick={() => setTheme("light")}
      style={{marginRight: "20px"}}>Light</button>
      <button onClick={() => setTheme("dark")}
       style={{marginRight: "20px"}}>Dark</button>
      <button onClick={() => setTheme("pink")}>Pink</button>
    </div>
    <div>
      <button style={{marginTop: "30px"}}
      onClick={() => {
        setTheme(theme === "dark"? "light" : "dark")
      }
      }>
        {theme === "dark"? <FaRegSun/> : <FaMoon/>}
      </button>
    </div>
    </div>
  )
}

export default App
