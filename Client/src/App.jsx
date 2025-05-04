import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Overview from './components/Overview';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import About from './components/About';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <Overview />
      <Speakers />
      <Agenda />
      <About />
      <RegisterForm />
      <Footer /> 
    </div>
  )
}

export default App;
