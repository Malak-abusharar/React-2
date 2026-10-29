import { createContext, useReducer } from "react";
const Data= createContext();


const initialData = {
  feild: "React",
  level: "senior",
  Count: 0,
  theme: "light",
};
  const reducer = (state, action) => {
    switch (action.type) {
    case "CHANGE_FEILD":
      return { ...state, feild: action.newValue };
    case "CHANGE_LEVEL":
      return { ...state, level: action.newValue };
    case "CHANGE_COUNT":
      return { ...state, Count: action.newValue };
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
const [firstState, dispatch] = useReducer(reducer, initialData);

const changeField = () => {
dispatch({ type: "CHANGE_FEILD", newValue: "Angular" });
};

const changeLevel = () => {
dispatch({ type: "CHANGE_LEVEL", newValue: "Mid" });
};

const changeCount = () => {
dispatch({ type: "CHANGE_COUNT", newValue: firstState.Count+1 });
};

const changeTheme = (newTheme) => {
dispatch({ type: "CHANGE_THEME", newValue: newTheme });
};

return (
<Data.Provider value={{ ...firstState, changeField, changeLevel, changeCount, changeTheme}}>
{children}
</Data.Provider>
);
}
export default Data;
