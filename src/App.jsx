import './App.css'
import { useReducer } from 'react';
import "./theme.css";
import { FaMoon, FaRegSun } from "react-icons/fa6";
const initialData = {feild: "React", level:"senior", Count:0, theme:"light"}
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FEILD":
      return { ...state, feild: action.newValue};

    default:
      return state;
  }
};


function App() {
  const [Data, dispatch] = useReducer(reducer, initialData);
  return (
    <div className={`App ${Data.theme}`}>
    <h1>My feiled is {Data.feild}</h1>
    <button onClick={() => {
      dispatch({ type: "CHANGE_FEILD", newValue: "Vue" });

    }
    }>Change Feild</button>
    <br/>
    <br/>
    <h1>I am a {Data.level}</h1>
    <button>Change Level</button>
    <br/>
    <br/>
    <button>Counter {Data.Count}</button>
    <br/>
    <br/>
    <div>
      <button
      style={{marginRight: "20px"}}>Light</button>
      <button
       style={{marginRight: "20px"}}>Dark</button>
      <button>Pink</button>
    </div>
    <div>
      <button style={{marginTop: "30px"}}
      >
      <FaRegSun/> <FaMoon/>
      </button>
    </div>
    </div>
  )
}

export default App
