import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Search, Filter, MapPin, Clock, User } from 'lucide-react';
import ciudadVivaIcon from '@/assets/icons/ciudad-viva-icon.svg';

// Importo los flyers
import guitarra from '@/assets/images/talleres/guitarra.jpg';
import sogueria from '@/assets/images/talleres/sogueria.jpg';
import coro from '@/assets/images/talleres/coro.jpg';
import macrame from '@/assets/images/talleres/macrame.jpg';
import fotografia from '@/assets/images/talleres/fotografia.jpg';
import plateria from '@/assets/images/talleres/plateria.jpg';
import danza from '@/assets/images/talleres/danza.jpg';
import luisaMacrame from '@/assets/images/talleres/luisa-macrame.jpg';
import folkloreAdultos from '@/assets/images/talleres/folklore-adultos.jpg';
import arteTextil from '@/assets/images/talleres/arte-textil.jpg';
import arte from '@/assets/images/talleres/arte.jpg';
import tango from '@/assets/images/talleres/tango.jpg';
import ajedrez from '@/assets/images/talleres/ajedrez.jpg';
import luisaDanza from '@/assets/images/talleres/luisa-danza.jpg';
import orquesta from '@/assets/images/talleres/orquesta.jpg';
import teatro from '@/assets/images/talleres/teatro.jpg';
import folklore from '@/assets/images/talleres/folklore.jpg';
import horariosImg from '@/assets/images/talleres/horarios.jpg';

const whatsappBase = 'https://wa.me/+5492478448965?text=';

// Ubicaciones disponibles
const ubicaciones = [
  'Taller Protegido',
  'Casa de la Cultura', 
  'Monumento Bandera Bonaerense',
  'Tanque',
  'Biblioteca Municipal',
  'La Luisa'
];

// Días disponibles
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Horarios disponibles
const horarios = ['Mañana', 'Tarde', 'Noche'];

// Todos los talleres con información completa
const todosLosTalleres = [
  { 
    nombre: 'Danzas Folklóricas', 
    docente: 'Profesora', 
    dia: 'Lunes', 
    horario: '13:30 a 15:30', 
    ubicacion: 'Taller Protegido',
    descripcion: 'Taller de danzas folklóricas para todas las edades', 
    flyer: horariosImg 
  },
  { 
    nombre: 'Fotografía', 
    docente: 'Prof. Fernando Batalla', 
    dia: 'Lunes', 
    horario: '18:30 a 20:00', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Aprende técnicas de fotografía y composición', 
    flyer: fotografia 
  },
  { 
    nombre: 'Zumba', 
    docente: 'Prof. Tania Cremachi', 
    dia: 'Martes', 
    horario: '9:00 a 10:00', 
    ubicacion: 'Monumento Bandera Bonaerense',
    descripcion: 'Clases de zumba para mantenerte en forma', 
    flyer: horariosImg 
  },
  { 
    nombre: 'Arte Textil', 
    docente: 'Prof. Rita Gautier', 
    dia: 'Martes', 
    horario: '14:15 a 16:15', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Técnicas de arte textil y manualidades', 
    flyer: arteTextil 
  },
  { 
    nombre: 'Soguería', 
    docente: 'Prof. Elio Brasca', 
    dia: 'Martes y Jueves', 
    horario: '17:30 a 19:30', 
    ubicacion: 'Tanque',
    descripcion: 'Arte tradicional de la soguería', 
    flyer: sogueria 
  },
  { 
    nombre: 'Danzas Contemporáneas', 
    docente: 'Prof. Brigitte Garatt Bailo', 
    dia: 'Martes y Jueves', 
    horario: '18:00 a 19:00', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Expresión corporal y danza contemporánea', 
    flyer: danza 
  },
  { 
    nombre: 'Teatro', 
    docente: 'Prof. Martín Ullua', 
    dia: 'Martes', 
    horario: '19:00 a 21:00', 
    ubicacion: 'Biblioteca Municipal',
    descripcion: 'Arte dramático y expresión teatral', 
    flyer: teatro 
  },
  { 
    nombre: 'Coro', 
    docente: 'Dir. Pablo Kiteber', 
    dia: 'Martes', 
    horario: '20:30 a 22:00', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Canto coral y música vocal', 
    flyer: coro 
  },
  { 
    nombre: 'Guitarra', 
    docente: 'Prof. Tomás Pérez Rocha', 
    dia: 'Miércoles', 
    horario: '13:00 a 15:00', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Aprende a tocar guitarra desde cero', 
    flyer: guitarra 
  },
  { 
    nombre: 'Orquesta de Cuerdas y Ensamble', 
    docente: 'Prof. Tomás Pérez Rocha', 
    dia: 'Miércoles', 
    horario: '15:00 a 18:00', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Música de cámara y ensamble orquestal', 
    flyer: orquesta 
  },
  { 
    nombre: 'Platería (cada 15 días)', 
    docente: 'Javier Pittavino', 
    dia: 'Miércoles', 
    horario: '16:00 a 20:00', 
    ubicacion: 'Tanque',
    descripcion: 'Arte de la platería criolla', 
    flyer: plateria 
  },
  { 
    nombre: 'Macramé', 
    docente: 'Prof. Bachi Ortiz', 
    dia: 'Miércoles', 
    horario: '16:00 a 20:00', 
    ubicacion: 'Monumento Bandera Bonaerense',
    descripcion: 'Técnicas de macramé y tejido', 
    flyer: macrame 
  },
  { 
    nombre: 'Macramé (La Luisa)', 
    docente: 'Prof. Bachi Ortiz', 
    dia: 'Jueves', 
    horario: '13:30 a 15:30', 
    ubicacion: 'La Luisa',
    descripcion: 'Técnicas de macramé y tejido en La Luisa', 
    flyer: luisaMacrame 
  },
  { 
    nombre: 'Teatro para Niños', 
    docente: 'Consultar', 
    dia: 'Jueves', 
    horario: '13:30 a 15:30', 
    ubicacion: 'Taller Protegido',
    descripcion: 'Teatro infantil y expresión artística', 
    flyer: horariosImg 
  },
  { 
    nombre: 'Danzas para Niñas y Niños', 
    docente: 'Brigitte Garatt Bailo', 
    dia: 'Miércoles', 
    horario: '16:15 a 17:15', 
    ubicacion: 'La Luisa',
    descripcion: 'Danza para niños y niñas', 
    flyer: luisaDanza 
  },
  { 
    nombre: 'Taller de Arte Creativo Experimental', 
    docente: 'Prof. Estefania Sanchez', 
    dia: 'Miércoles', 
    horario: '18:15 a 19:45', 
    ubicacion: 'Monumento Bandera Bonaerense',
    descripcion: 'Arte experimental y creatividad', 
    flyer: arte 
  },
  { 
    nombre: 'Taller de Danzas Folklóricas Adultos', 
    docente: 'Prof. Florencia Morales', 
    dia: 'Jueves', 
    horario: '19:00 a 21:00', 
    ubicacion: 'Monumento Bandera Bonaerense',
    descripcion: 'Danzas folklóricas para adultos', 
    flyer: folkloreAdultos 
  },
  { 
    nombre: 'Tango', 
    docente: 'Micky Sambunjak', 
    dia: 'Jueves', 
    horario: '19:30 a 21:30', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Bailes de tango y milonga', 
    flyer: tango 
  },
  { 
    nombre: 'Folklore para Niños y Jóvenes', 
    docente: 'Prof. Martin Slaiman', 
    dia: 'Viernes', 
    horario: '18:30 a 20:30', 
    ubicacion: 'Casa de la Cultura',
    descripcion: 'Danzas folklóricas para niños y jóvenes', 
    flyer: folklore 
  },
  { 
    nombre: 'Ajedrez', 
    docente: 'Prof. Fernando Batalla', 
    dia: 'Sábado', 
    horario: '15:00 a 17:00', 
    ubicacion: 'Monumento Bandera Bonaerense',
    descripcion: 'Estrategia y táctica del ajedrez', 
    flyer: ajedrez 
  },
];

const TalleresCulturales = () => {
  
  // Estados para filtros
  const [busqueda, setBusqueda] = useState('');
  const [filtroDia, setFiltroDia] = useState('');
  const [filtroHorario, setFiltroHorario] = useState('');
  const [filtroUbicacion, setFiltroUbicacion] = useState('');
  const [filtroDocente, setFiltroDocente] = useState('');

  // Filtrar talleres
  const talleresFiltrados = useMemo(() => {
    return todosLosTalleres.filter(taller => {
      const cumpleBusqueda = busqueda === '' || 
        taller.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        (taller.docente && taller.docente.toLowerCase().includes(busqueda.toLowerCase()));
      
      const cumpleDia = filtroDia === '' || taller.dia.includes(filtroDia);
      const cumpleHorario = filtroHorario === '' || taller.horario.includes(filtroHorario);
      const cumpleUbicacion = filtroUbicacion === '' || taller.ubicacion === filtroUbicacion;
      const cumpleDocente = filtroDocente === '' || 
        (taller.docente && taller.docente.toLowerCase().includes(filtroDocente.toLowerCase()));

      return cumpleBusqueda && cumpleDia && cumpleHorario && cumpleUbicacion && cumpleDocente;
    });
  }, [busqueda, filtroDia, filtroHorario, filtroUbicacion, filtroDocente]);

  // Limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda('');
    setFiltroDia('');
    setFiltroHorario('');
    setFiltroUbicacion('');
    setFiltroDocente('');
  };



  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Talleres Culturales - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conocé los talleres culturales vigentes, sus docentes, horarios y cómo inscribirte o pedir información." />
      </Helmet>

      {/* Hero con filtros */}
      <section className="w-full bg-gradient-to-br from-orange-200 via-orange-300 to-red-300 border-b border-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <img src={ciudadVivaIcon} alt="Ciudad Viva" className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">Talleres Culturales</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-800">
              Conocé la oferta de talleres culturales, sus docentes y horarios. ¡Inscribite o consultá fácilmente!
            </p>
          </motion.div>

          {/* Sistema de búsqueda y filtros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-orange-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-bold text-red-900">Buscar y Filtrar Talleres</h2>
            </div>
            
            {/* Barra de búsqueda */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nombre del taller o docente..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-red-800 mb-1">Día</label>
                <select
                  value={filtroDia}
                  onChange={(e) => setFiltroDia(e.target.value)}
                  className="w-full border border-orange-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Todos los días</option>
                  {dias.map(dia => (
                    <option key={dia} value={dia}>{dia}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-red-800 mb-1">Horario</label>
                <select
                  value={filtroHorario}
                  onChange={(e) => setFiltroHorario(e.target.value)}
                  className="w-full border border-orange-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Todos los horarios</option>
                  {horarios.map(horario => (
                    <option key={horario} value={horario}>{horario}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-red-800 mb-1">Ubicación</label>
                <select
                  value={filtroUbicacion}
                  onChange={(e) => setFiltroUbicacion(e.target.value)}
                  className="w-full border border-orange-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Todas las ubicaciones</option>
                  {ubicaciones.map(ubicacion => (
                    <option key={ubicacion} value={ubicacion}>{ubicacion}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-red-800 mb-1">Docente</label>
                <input
                  type="text"
                  placeholder="Buscar docente..."
                  value={filtroDocente}
                  onChange={(e) => setFiltroDocente(e.target.value)}
                  className="w-full border border-orange-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={limpiarFiltros}
                  variant="outline"
                  className="w-full border-orange-400 text-orange-700 hover:bg-orange-100"
                >
                  Limpiar Filtros
                </Button>
              </div>
            </div>

            {/* Resultados */}
            <div className="text-sm text-red-700">
              {talleresFiltrados.length === 0 ? (
                <p>No se encontraron talleres con los filtros aplicados.</p>
              ) : (
                <p>Mostrando {talleresFiltrados.length} de {todosLosTalleres.length} talleres</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talleres filtrados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talleresFiltrados.map((taller, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-4 border border-orange-100 flex flex-col items-center hover:shadow-orange-200/50 transition-shadow duration-300"
              >
                <img src={taller.flyer} alt={taller.nombre} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold text-red-900 mb-2 text-center">{taller.nombre}</h3>
                
                <div className="w-full space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-red-700">
                    <User className="w-4 h-4" />
                    <span><strong>Docente:</strong> {taller.docente}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-red-700">
                    <Clock className="w-4 h-4" />
                    <span><strong>Horario:</strong> {taller.dia} - {taller.horario}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-red-700">
                    <MapPin className="w-4 h-4" />
                    <span><strong>Ubicación:</strong> {taller.ubicacion}</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="border-orange-400 text-orange-700 hover:bg-orange-100"
                  onClick={() => {
                    const texto = `Hola! Quiero información sobre el taller de ${taller.nombre}`;
                    window.open(whatsappBase + encodeURIComponent(texto), '_blank');
                  }}
                >
                  Solicitar info por WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalleresCulturales; 