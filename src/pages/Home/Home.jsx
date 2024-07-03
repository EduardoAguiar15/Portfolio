import React from 'react';
import Apresentacao from "../../components/Apresentacao/Apresentacao.jsx";
import SobreMim from '../../components/SobreMim/SobreMim.jsx';
import Header from "../../components/Header/Header.jsx";
import Projetos from '../../components/Projetos/Projetos.jsx';

function Home() {
  return (
    //  <ImageHome />
    <>
        <Header />
        <Apresentacao/>
        <SobreMim/>
        <Projetos />
    </>
  );
}

export default Home;
