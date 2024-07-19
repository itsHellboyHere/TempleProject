import Navbar from "../components/Navbar"
import HomeComp from "../components/HomeComp"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
   <HomeComp/>
   <Footer/>
   </>
  )
}
export default Home