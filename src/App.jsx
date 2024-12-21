import Footer from "./components/Footer";
import Header from "./components/Header";
import Karta from "./components/Karta";
import Malumot from "./components/Malumot";
import Navbar from "./components/Navbar";
import Otziv from "./components/Otziv";
import Priyom from "./components/Priyom";
import Vrachi from "./components/Vrachi";
import Xizmatkorsatish from "./components/Xizmatkorsatish";

export default function App() {
  
  return (
 <main className='flex flex-col items-center container mx-auto  '>
      <Navbar/>
      <Header/>
      <Xizmatkorsatish/>
      <Priyom/>
     <Malumot/>
      <Vrachi/>
      <Otziv/>
      <Karta/>
      <Priyom/>
      <Footer/>
    
    </main>
  )
}