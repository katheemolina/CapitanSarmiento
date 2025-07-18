import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users } from 'lucide-react';

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

const whatsappBase = 'https://wa.me/+5492478448965?text=';

// Talleres en Capitán Sarmiento
const talleres = [
  { nombre: 'Orquesta de Cuerdas', docente: '', horario: '', descripcion: '', flyer: orquesta },
  { nombre: 'Macramé', docente: '', horario: '', descripcion: '', flyer: macrame },
  { nombre: 'Tango', docente: '', horario: '', descripcion: '', flyer: tango },
  { nombre: 'Folklore Adultos', docente: '', horario: '', descripcion: '', flyer: folkloreAdultos },
  { nombre: 'Folklore Niños', docente: '', horario: '', descripcion: '', flyer: folklore },
  { nombre: 'Ballet Municipal', docente: '', horario: '', descripcion: '', flyer: danza },
  { nombre: 'Ajedrez', docente: '', horario: '', descripcion: '', flyer: ajedrez },
  { nombre: 'Fotografía', docente: '', horario: '', descripcion: '', flyer: fotografia },
  { nombre: 'Soguería', docente: '', horario: '', descripcion: '', flyer: sogueria },
  { nombre: 'Coro', docente: '', horario: '', descripcion: '', flyer: coro },
  { nombre: 'Guitarra y Ensamble', docente: '', horario: '', descripcion: '', flyer: guitarra },
  { nombre: 'Arte Textil', docente: '', horario: '', descripcion: '', flyer: arteTextil },
  { nombre: 'Teatro', docente: '', horario: '', descripcion: '', flyer: teatro },
  { nombre: 'Arte para Niños', docente: '', horario: '', descripcion: '', flyer: arte },
  { nombre: 'Arte para adultos y Adolescentes', docente: '', horario: '', descripcion: '', flyer: arte },
  { nombre: 'Platería', docente: '', horario: '', descripcion: '', flyer: plateria },
];

// Talleres en La Luisa
const talleresLuisa = [
  { nombre: 'Macramé (La Luisa)', docente: '', horario: '', descripcion: '', flyer: luisaMacrame },
  { nombre: 'Folklore para niños (La Luisa)', docente: '', horario: '', descripcion: '', flyer: luisaDanza },
  // Puedes agregar más si hay
];

const TalleresCulturales = () => {
  const [tallerSeleccionado, setTallerSeleccionado] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Hola! quiero más información sobre el taller de: ${tallerSeleccionado}. Mi nombre es ${nombre} y mi email es ${email}. ${mensaje}`;
    window.open(whatsappBase + encodeURIComponent(texto), '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <Helmet>
        <title>Talleres Culturales - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conocé los talleres culturales vigentes, sus docentes, horarios y cómo inscribirte o pedir información." />
      </Helmet>
      <section className="py-20 bg-gradient-to-r from-pink-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto mb-6 text-pink-600" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pink-900">Talleres Culturales</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-pink-800">
              Conocé la oferta de talleres culturales, sus docentes y horarios. ¡Inscribite o consultá fácilmente!
            </p>
          </motion.div>

          {/* Talleres en Capitán Sarmiento */}
          <h2 className="text-2xl font-bold text-pink-900 mb-6">En Capitán Sarmiento</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {talleres.map((taller, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-4 border border-pink-100 flex flex-col items-center"
              >
                <img src={taller.flyer} alt={taller.nombre} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-bold text-pink-900 mb-2">{taller.nombre}</h3>
                <p className="text-pink-700 mb-1"><strong>Docente:</strong> {taller.docente || 'A completar'}</p>
                <p className="text-pink-700 mb-1"><strong>Horario:</strong> {taller.horario || 'A completar'}</p>
                <p className="text-gray-600 mb-4">{taller.descripcion || 'Próximamente más info.'}</p>
                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-700 hover:bg-pink-100"
                  onClick={() => setTallerSeleccionado(taller.nombre)}
                >
                  Solicitar info por WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Separador visual */}
          <div className="my-12 border-t-4 border-pink-300 text-center">
            <span className="inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-full -mt-5 text-lg font-semibold">En La Luisa</span>
          </div>

          {/* Talleres en La Luisa */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {talleresLuisa.map((taller, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-4 border border-pink-100 flex flex-col items-center"
              >
                <img src={taller.flyer} alt={taller.nombre} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-bold text-pink-900 mb-2">{taller.nombre}</h3>
                <p className="text-pink-700 mb-1"><strong>Docente:</strong> {taller.docente || 'A completar'}</p>
                <p className="text-pink-700 mb-1"><strong>Horario:</strong> {taller.horario || 'A completar'}</p>
                <p className="text-gray-600 mb-4">{taller.descripcion || 'Próximamente más info.'}</p>
                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-700 hover:bg-pink-100"
                  onClick={() => setTallerSeleccionado(taller.nombre)}
                >
                  Solicitar info por WhatsApp
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Formulario de contacto */}
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-pink-100">
            <h2 className="text-2xl font-bold text-pink-900 mb-4 flex items-center gap-2"><MessageCircle /> Consultá o inscribite</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-pink-800 font-semibold mb-1">Taller</label>
                <select
                  className="w-full border-pink-300 rounded p-2"
                  value={tallerSeleccionado}
                  onChange={e => setTallerSeleccionado(e.target.value)}
                  required
                >
                  <option value="">Seleccioná un taller</option>
                  {[...talleres, ...talleresLuisa].map((t, i) => <option key={i} value={t.nombre}>{t.nombre}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-pink-800 font-semibold mb-1">Nombre</label>
                <input
                  className="w-full border-pink-300 rounded p-2"
                  type="text"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-pink-800 font-semibold mb-1">Email</label>
                <input
                  className="w-full border-pink-300 rounded p-2"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-pink-800 font-semibold mb-1">Mensaje (opcional)</label>
                <textarea
                  className="w-full border-pink-300 rounded p-2"
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full bg-pink-600 text-white hover:bg-pink-700">
                Enviar consulta por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalleresCulturales; 