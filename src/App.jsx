
import './App.css'
import Competence from './Composants/Competence/Competence';
import Header from './Composants/Header/Header';
import Home from './Composants/Home/Home';
import Projet from './Composants/Projet/Projet';
import Propos from './Composants/Propos/Propos';
import Service from './Composants/Services/Service';


let App = ()=>{


  return <>
          
          <Header />
          <Home />
          <Propos />
          <Competence />
          <Service />
          <Projet />
          </>
}

export default App;
