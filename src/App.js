import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

function App(){
  const tema=["1.- Tipos de componentes", "2.- Contenedores",
    "3.- Usar mas de un componente", "4.-Funciones","5.- Props"]
  return (
  <div className="App">
      <Banner text="Desarrollo de Aplicaciones para Dispositivos Móviles"/>
      <Header/>
      <Banner text="KACPC - JECA"/>
      <Body
      text="Practica 1"
      tema={tema}
      />
      <Footer
      bajo={"Copyright © Todo los derechos reservados "}
      />

  </div>);}
export default App;
