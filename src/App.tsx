import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main  from "./components/Main";
import { ToastContainer } from "react-toastify";
function App() {


  return (
    <>
    <Nav />
    <Hero/>
    <Main />
    <ToastContainer position="top-right" autoClose={3000} />
    

    

    </>
  )
}

export default App
