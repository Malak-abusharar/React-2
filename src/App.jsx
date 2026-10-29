import "./App.css";
import { useReducer } from "react";
import "./theme.css";
import { FaMoon, FaRegSun } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useContext } from "react";
import Data from "./context/Data";

// const initialData = {
//   feild: "React",
//   level: "senior",
//   Count: 0,
//   theme: "light",
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_FEILD":
//       return { ...state, feild: action.newValue };
//     case "CHANGE_LEVEL":
//       return { ...state, level: action.newValue };
//     case "CHANGE_COUNT":
//       return { ...state, Count: action.newValue };
//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };
//     default:
//       return state;
//   }
// };

function App() {
  // const [Data, dispatch] = useReducer(reducer, initialData);
  const {feild, changeField, level, Count, theme} = useContext(Data);

  return (
    <div className={`App ${theme}`}>
      <h1>My feiled is {feild}</h1>
      {/* <button
        onClick={() => {
          dispatch({ type: "CHANGE_FEILD", newValue: "Vue" });
        }}
      >
        Change Feild
      </button> */}
      <br />
      <br />
      <h1>I am a {level}</h1>
      {/* <button
        onClick={() => {
          dispatch({ type: "CHANGE_LEVEL", newValue: "Mid" });
        }}
      >
        Change Level
      </button> */}
      <br />
      <br />
      <button
        // onClick={() => {
        //   dispatch({ type: "CHANGE_COUNT", newValue: Data.Count + 1 });
        // }}
      >
        Counter {Count}
      </button>
      <br />
      <br />
      <div>
        {/* <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "light" });
          }}
          style={{ marginRight: "20px" }}
        >
          Light
        </button> */}
        {/* <button
          style={{ marginRight: "20px" }}
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "dark" });
          }}
        >
          Dark
        </button> */}
        {/* <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "pink" });
          }}
        >
          Pink
        </button> */}
      </div>
      <div>
        {/* <button
          style={{ marginTop: "30px" }}
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              newValue: Data.theme == "light" ? "dark" : "light",
            });
          }}
        >
          {Data.theme == "light" ? <FaMoon /> : <FaRegSun />}
        </button> */}
      </div>
      <button style={{ marginTop: "30px" }}>
        <Link to="/home">Go to home</Link></button>
    </div>
  );
}

export default App;
