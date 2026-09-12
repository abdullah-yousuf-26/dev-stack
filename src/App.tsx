import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies  from "./components/Technologies";
import { ToastContainer } from "react-toastify";
function App() {


  return (
    <>
    <Nav />
    <Hero/>
    <Technologies />
    <ToastContainer position="top-right" autoClose={3000} />
    

    

    </>
  )
}

export default App
