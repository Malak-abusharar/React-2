import "./App.css";
import "./theme.css";
import { FaMoon, FaRegSun } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useContext } from "react";
import Data from "./context/Data";

function App() {
  const {feild, changeField, level, Count, theme, 
    changeLevel, changeCount, changeTheme} = useContext(Data);

  return (
    <div className={`App ${theme}`}>
      <h1>My feiled is {feild}</h1>
      <button
        onClick={() => { changeField()  }}  >
        Change Feild
      </button>
      <br />
      <br />
      <h1>I am a {level}</h1>
      <button
        onClick={() => {
          changeLevel()
        }}
      >
        Change Level
      </button>
      <br />
      <br />
      <button
        onClick={() => {
        changeCount()
        }}
      >
        Counter {Count}
      </button>
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            changeTheme("light")
          }}
          style={{ marginRight: "20px" }}
        >
          Light
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => {
          changeTheme("dark")
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            changeTheme("pink")
          }}
        >
          Pink
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "30px" }}
          onClick={() => {
            changeTheme(theme == "light" ? "dark" : "light")
          }}
        >
          {theme == "light" ? <FaMoon /> : <FaRegSun />}
        </button>
      </div>
      <button style={{ marginTop: "30px" }}>
        <Link to="/home">Go to home</Link></button>
    </div>
  );
}

export default App;
