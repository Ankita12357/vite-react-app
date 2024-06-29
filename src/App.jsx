import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
import Image from './photo/1.jpg';
import Image1 from './photo/2.jpg';
import Image2 from './photo/3.jpg';
import Image3 from './photo/4.webp';


function App() {
  
  return (
    <>
      <Navbar/>
      <div className="card">
      <Card title="card1" description="This is a card" img={Image}/>
      <Card title="card2" description="This is a card" img={Image1}/>
      <Card title="card3" description="This is a card" img={Image2}/>
      <Card title="card4" description="This is a card" img={Image3}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
