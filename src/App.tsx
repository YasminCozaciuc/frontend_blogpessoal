import React from 'react';
import { Grid } from '@material-ui/core';
import  './paginas/home/Home';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadatroUsuario';
import ListaTemas from './paginas/temas/listaTemas/listaTemas';
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagem';
import CadastroTemas from './components/temas/cadastroTemas/CadastroTemas';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
        <Route path="/temas" element={<ListaTemas />} />
        <Route path="/postagens" element={<ListaPostagens />} />
        <Route path="/cadastrarTema" element={<CadastroTemas />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  
  )
}

export default App;
