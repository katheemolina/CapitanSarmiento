import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Municipality from '@/pages/Municipality';
import Services from '@/pages/Services';
import News from '@/pages/News';
import Contact from '@/pages/Contact';
import BanderaBonaerense from '@/pages/BanderaBonaerense';
import Turf from '@/pages/Turf';
import NuestraCiudad from '@/pages/municipality/NuestraCiudad';
import CiudadSegura from '@/pages/municipality/CiudadSegura';
import CiudadEducadora from '@/pages/municipality/CiudadEducadora';
import CiudadViva from '@/pages/municipality/CiudadViva.jsx';
import CiudadVerde from '@/pages/municipality/CiudadVerde.jsx';
import CiudadOportunidades from '@/pages/municipality/CiudadOportunidades.jsx';
import CiudadAmigable from '@/pages/municipality/CiudadAmigable.jsx';
import TalleresCulturales from './pages/municipality/TalleresCulturales';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Helmet>
        <title>Municipio de Capitán Sarmiento - Buenos Aires, Argentina</title>
        <meta name="description" content="Sitio oficial del Municipio de Capitán Sarmiento, cuna de la bandera bonaerense y capital nacional del turf. Descubre nuestra historia, servicios y atractivos turísticos." />
      </Helmet>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/municipio" element={<Municipality />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/bandera-bonaerense" element={<BanderaBonaerense />} />
        <Route path="/turf" element={<Turf />} />
        <Route path="/municipio/nuestra-ciudad" element={<NuestraCiudad />} />
        <Route path="/municipio/ciudad-segura" element={<CiudadSegura />} />
        <Route path="/municipio/ciudad-educadora" element={<CiudadEducadora />} />
        <Route path="/municipio/ciudad-viva" element={<CiudadViva />} />
        <Route path="/municipio/ciudad-verde" element={<CiudadVerde />} />
        <Route path="/municipio/ciudad-oportunidades" element={<CiudadOportunidades />} />
        <Route path="/municipio/ciudad-amigable" element={<CiudadAmigable />} />
        <Route path="/municipality/TalleresCulturales" element={<TalleresCulturales />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;