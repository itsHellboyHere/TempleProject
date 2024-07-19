import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Donation from "../../frontend/src/pages/Donation"
import Layout from "./pages/Layout"

import 'flowbite/dist/flowbite.min.css';
import Gallery from "./components/Gallery";
import About from "./pages/About";
import {Toaster} from 'react-hot-toast'
import DonationList from "./components/DonationList";


const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/all-donations" element={<DonationList/> } />
      </Route>
    </Routes>
    <Toaster/>
    </>

  )
}
export default App