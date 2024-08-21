import React from 'react';
import Presentation from "../../components/Presentation/Presentation.jsx";
import AboutMe from '../../components/AboutMe/AboutMe.jsx';
import Header from "../../components/Header/Header.jsx";
import Projects from '../../components/Projects/Projects.jsx';
import WhatsApp from '../../components/WhatsApp/WhatsApp.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Certificates from '../../components/Certificates/Certificates.jsx';

function Home() {

  return (
    <>
      <Header/>
      <Presentation />
      <AboutMe />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default Home;
