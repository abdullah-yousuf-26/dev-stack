import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main  from "./components/Main";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {


  return (
    <>
    <Nav />
    <Hero/>
    <Main />
    <ToastContainer position="top-right" autoClose={3000} />
    <Footer/>
    

    

    </>
  )
}

export default App
