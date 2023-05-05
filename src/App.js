import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Bannera from './components/Bannera';
import Bannerb from "./components/Bannerb";
import Services from './components/Services';
import Afterservices from './components/Afterservices';
import Lrfs from './components/Lrfs';
import Language from './components/Language';
import Ladybanner from './components/Ladybanner';
import Studentfeedback from './components/Studentfeedback';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Bannera/>
      <Bannerb/>
      <Services/>
      <Afterservices/>
      <Lrfs/>
      <Language/>
      <Ladybanner/>
      <Studentfeedback/>
      <Footer/>
    </div>
  );
}

export default App;
