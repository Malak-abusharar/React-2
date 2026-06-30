import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
export default function Basic() {
  return (
    <>
<Header/>
<h1 id="hello" style={{color: "blue"}}>hello</h1>
<Content data="Basic"/>

<Footer/>
    </>
  )
}
