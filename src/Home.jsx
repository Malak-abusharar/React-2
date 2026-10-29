import {useContext } from "react";
import Data from "./context/Data";
import {Link} from "react-router-dom";
export default function Home() {
    const {feild, theme} = useContext(Data);

  return (
      <div className={`App ${theme}`}>
      <h1>Home Page</h1>
      <h1>My feiled is {feild}</h1>
        <button style={{ marginTop: "30px" }}>
        <Link to="/">Back</Link></button>
    </div>
  )
}
