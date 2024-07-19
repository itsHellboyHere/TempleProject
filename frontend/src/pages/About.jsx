import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"


const About = () => {
  return (
    <>
     <Helmet>
        <title>About - Temple Donation</title>
      </Helmet>
    <div className="about-sec  min-h-screen flex items-center justify-center bg-cover bg-center ">
        <div className=" mx-auto p-20  overflow-auto">
            <h1 className="text-2xl text-white font-extrabold underline mb-5 ">Temple Donation </h1>
            <div >
                <p className="text-xl font-serif text-slate-200 ">
            We families and villagers are donating as a community to make a temple in the village. We are from Kutha Dih, Lakishsarai-Bihar.
          </p>
             <p className="text-xl font-serif text-slate-200 ">
            We believe that by coming together and contributing, we can build a place that will serve as a beacon of our culture and traditions for future generations. Your support and donations are vital to making this dream a reality.
          </p>
          <p className="text-base sm:text-lg text-slate-200 mb-4">
            Thank you for your support and generosity. We are immensely grateful for your help in making this project a reality.
          </p>
          <p className="text-base sm:text-lg text-slate-300 mb-4 text-center font-semibold">
            - The Community of Khutha Dih Barihya, Lakishsarai, Bihar
          </p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
export default About