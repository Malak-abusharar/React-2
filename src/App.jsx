import './App.css'

function App() {
  let feild = "React.js"
  const changeFeild = () => {
    console.log("helllo")
    feild = "Vue"
  }
  
  return (
    <>
    <h1>My feiled is {feild}</h1>
    <button onClick={changeFeild}>Change Feild</button>
    </>
  )
}

export default App
