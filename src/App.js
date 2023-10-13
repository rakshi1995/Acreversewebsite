
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero-section/Hero';
import Navbar from './components/Navbar';

import { Project } from './components/Project';
import Service from './components/Service';


function App() {
  return (
   <>
<Navbar/>

<Hero/>
<Service/>
<Project/>
<About/>
<Contact/>
<Footer/>

   </>
  );
}

export default App;
