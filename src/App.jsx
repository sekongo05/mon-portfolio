
import './App.css'
import Competence from './Composants/Competence/Competence';
import Header from './Composants/Header/Header';
import Home from './Composants/Home/Home';
import Projet from './Composants/Projet/Projet';
import Certificat from './Composants/Certificat/Certificat';
import Propos from './Composants/Propos/Propos';
import Service from './Composants/Services/Service';
import Footer from './Composants/Footer/Footer';


let App = ()=>{


  return <>
          
          <Header />
          <Home />
          <Propos />
          <Competence />
          <Certificat />
          <Service />
          <Projet />
          <Footer />
          </>
}

export default App;
