
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ciudadVivaIcon from '@/assets/icons/ciudad-viva-icon.svg';
import { Heart, Users, Calendar, MapPin, Building, Landmark, Flag, Music, Palette, Trophy, Phone, Instagram, Facebook, MessageCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
// Importo las imágenes
import cultura from '@/assets/images/ciudadviva/cultura.jpg';
import cahuane from '@/assets/images/ciudadviva/cahuane.jpg';
import cultura2 from '@/assets/images/ciudadviva/cultura2.jpg';
import museoImg from '@/assets/images/ciudadviva/museo.jpg';
import banderaBonaerense from '@/assets/images/ciudadviva/bandera-bonaerense.jpg';
import cineitalo from '@/assets/images/ciudadviva/cineitalo.jpg';
import gastronomico from '@/assets/images/ciudadviva/gastronomico.jpg';
import tunel from '@/assets/images/ciudadviva/tunel.jpg';
import capitalTurf from '@/assets/images/ciudadviva/capital-turf.jpg';

const whatsappBase = 'https://wa.me/+5492478448965?text=Hola!%20quiero%20mas%20informacion%20sobre%20el%20taller%20de:';

const objetivos = [
  'Fomentar actividades deportivas, culturales y turísticas.',
  'Brindar una oferta hotelera y gastronómica de calidad.',
  'Generar puntos de encuentro y convivencia en la ciudad.',
  'Difundir y calendarizar eventos regionalmente.'
];

const museos = [
  {
    title: 'Museo Histórico',
    description: 'En la antigua estación de tren, cuenta la historia de nuestro pueblo y su crecimiento.',
    icon: <Building className="w-8 h-8" />,
  },
  {
    title: 'Museo de la Bandera Bonaerense',
    description: 'Revive el nacimiento de la bandera provincial, creada en 1997 por estudiantes locales.',
    icon: <Flag className="w-8 h-8" />,
  },
  {
    title: 'Museo de la Recreación Histórica',
    description: 'Narra la historia de nuestra patria a través de exhibiciones únicas.',
    icon: <Landmark className="w-8 h-8" />,
  },
  {
    title: 'Cine Ítalo',
    description: 'Casa de la Sociedad Italiana de Socorros Mutuos. Ofrece talleres de lengua italiana, danza urbana,tango y folklore, proyección de películas y escenario para actuaciones musicales y teatrales.',
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: 'Eventos Gastronómicos',
    description: 'Encuentros de Food Trucks y los tradicionales Carnavales de la ciudad, con desfiles, elección de reina o rey, y premios. La gastronomía local y regional se luce en cada evento.',
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    title: 'El Túnel',
    description: 'Túnel bajo las vías del antiguo ferrocarril, utilizado antiguamente para cruzar de andén. Hoy se puede visitar y es sede de muestras de arte y actividades culturales.',
    icon: <Eye className="w-8 h-8" />,
  }
];

const clubes = [
  'Fútbol', 'Básquet', 'Pelota', 'Pádel', 'Patín', 'Tenis', 'Tejo', 'Bochas', 'Vóley', 'Taekwondo', 'Entrenamiento funcional', 'Hockey', 'Kick boxing', 'Natación', 'Fútbol 5', 'Gimnasio', 'Escuela de vuelo', 'Vuelo de bautismo'
];

const instituciones = [
  { name: 'Rotary Club', icon: <Users className="w-8 h-8" /> },
  { name: 'Club de Leones', icon: <Users className="w-8 h-8" /> }
];

const CiudadViva = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ciudad Viva - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Descubre la vida cultural, deportiva y social de Capitán Sarmiento. Talleres, museos, clubes, eventos y mucho más." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-orange-200 via-orange-300 to-red-300 border-b border-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 py-20 md:py-32">
          <motion.div 
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <img src={ciudadVivaIcon} alt="Ciudad Viva" className="w-20 h-20 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Ciudad Viva</h1>
            <p className="text-lg md:text-xl text-red-800 mb-6 max-w-2xl mx-auto md:mx-0">
              Sabemos que el turismo y las actividades artísticas y culturales, así como gastronómicas, generan una dinámica inusual en la ciudad, que muchas veces se refleja en una posibilidad de crecimiento social y económico para comerciantes, emprendedores y vecinos que viven de lo que hacen con sus manos.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white mb-2">
              <a href={whatsappBase} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" /> Consultar Cultura y Turismo
              </a>
            </Button>
            <div className="flex gap-2 mt-2">
              <a href="https://www.instagram.com/culturacapitansarmiento/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pink-700 hover:underline"><Instagram className="w-5 h-5" /> Cultura Capitán Sarmiento</a>
              <a href="https://www.facebook.com/culturavivacapsto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline"><Facebook className="w-5 h-5" /> Cultura Viva Capsto</a>
            </div>
            <Link to="/municipality/TalleresCulturales" className="mt-4 inline-block text-red-700 underline font-semibold hover:text-red-900">Ver talleres culturales</Link>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Espacio para imagen principal, súbela aquí */}
            <img 
              src={cultura} 
              alt="Cultura Capitán Sarmiento" 
              className="w-full max-w-lg h-72 md:h-96 object-cover object-center rounded-xl shadow-lg border border-orange-100 bg-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-4">Nuestros Objetivos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Para que nuestra ciudad tenga vida propia, nos propusimos los siguientes objetivos:
            </p>
          </motion.div>
          <ul className="grid md:grid-cols-2 gap-8">
            {objetivos.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 shadow">
                <Heart className="w-8 h-8 text-red-400 mt-1" />
                <span className="text-lg text-gray-800">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Encuentro Nacional de Artesanos Cahuané */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">Encuentro Nacional de Artesanos Cahuané</h2>
            <div className="space-y-6 text-gray-700">
              <p>Durante el mes de marzo se realiza en nuestra ciudad el Encuentro Nacional de Artesanos Cahuané y el Encuentro de Jóvenes Artesanos del país. Con la presencia de grandes artesanos que le otorgan un realce sorprendente al evento; por la calidad, variedad y excelencia en los trabajos presentados. Contamos también con la presencia de artesanos de gran importancia de países hermanos como Uruguay, Paraguay, Brasil y Bolivia.</p>
              <p>Dentro del Encuentro Nacional Cahuané, se brindan talleres de iniciación y perfeccionamiento en rubros tales como metales, textiles, piedra, vidrio, cerámica, cuero, papel, lutería, etc.</p>
              <p>Durante las cuatro noches del encuentro, artistas locales, regionales y nacionales, le dan brillo al evento, desde el Escenario Mayor. Es así, como nuestra ciudad, a través de esta gran actividad anual, se destaca como uno de los lugares de mayor importancia en artesanías de la Argentina, logrando este gran Encuentro, que ya lleva 34 años de realización, y que todos los años, para mediados de marzo, espera, recibe y disfruta de los grandes trabajadores de la cultura, los artesanos y el gran público de nuestro país.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Espacio para imagen de Cahuané */}
            <img 
              src={cahuane} 
              alt="Encuentro Nacional de Artesanos Cahuané" 
              className="w-full h-96 object-cover rounded-xl shadow-lg border border-orange-100 bg-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* Casa de la Cultura y Talleres */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">Casa de la Cultura y Talleres</h2>
            <div className="space-y-6 text-gray-700">
              <p>La Casa de la Cultura, en la que tiene sede la Coordinación de Cultura y Turismo, funciona en el Teatro Español, recuperado en el año 2020, que no sólo maravilla con la estructura de su edificio, sino que además alberga variados talleres con una matrícula de alrededor de 500 personas.</p>
              <p>Ver todos los talleres, docentes y horarios:</p>
              <Link to="/municipality/TalleresCulturales" className="inline-block text-red-700 underline font-semibold hover:text-red-900">Ir a Talleres Culturales</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Espacio para imagen del Teatro Español */}
            <img 
              src={cultura2} 
              alt="Casa de la Cultura y Talleres" 
              className="w-full h-96 object-cover rounded-xl shadow-lg border border-orange-100 bg-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* Museos */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-4">Museos y Espacios Culturales</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Espacios que preservan y difunden nuestra historia y cultura
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {museos.map((museo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-pink-100 flex flex-col items-center"
              >
                <div className="mb-4">{museo.icon}</div>
                <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">{museo.title}</h3>
                <p className="text-gray-700 text-center">{museo.description}</p>
                {/* Imagen para cada museo/card */}
                {museo.title === 'Museo Histórico' && (
                  <img src={museoImg} alt="Museo Histórico" className="w-full h-32 object-cover rounded-xl mt-4 border border-orange-100" />
                )}
                {museo.title === 'Museo de la Bandera Bonaerense' && (
                  <img src={banderaBonaerense} alt="Museo de la Bandera Bonaerense" className="w-full h-32 object-cover rounded-xl mt-4 border border-orange-100" />
                )}
                {museo.title === 'Cine Ítalo' && (
                  <img src={cineitalo} alt="Cine Ítalo" className="w-full h-32 object-cover rounded-xl mt-4 border border-orange-100" />
                )}
                {museo.title === 'Eventos Gastronómicos' && (
                  <img src={gastronomico} alt="Eventos Gastronómicos" className="w-full h-32 object-cover rounded-xl mt-4 border border-orange-100" />
                )}
                {museo.title === 'El Túnel' && (
                  <img src={tunel} alt="El Túnel" className="w-full h-32 object-cover rounded-xl mt-4 border border-orange-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Polideportivo y Clubes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-red-900 mb-4 text-center">Polideportivo y Clubes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
              Espacios deportivos y sociales fundamentales para la vida de la ciudad
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Polideportivo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Trophy className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Polideportivo Jorge Milicich <span className='text-orange-500'>(Cancha de la liga)</span></h3>
              <p className="text-gray-700 text-center mb-4">Espacio municipal con canchas, pista de atletismo y gimnasio cubierto. Sede de torneos interclubes, actividades recreativas y eventos deportivos para toda la familia.</p>
              <a href="https://www.instagram.com/deportes_sarmiento" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition"><Instagram className="w-5 h-5" /> deportes_sarmiento</a>
            </motion.div>
            {/* Club San Carlos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Users className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Club San Carlos</h3>
              <p className="text-gray-700 text-center mb-4">Un club con historia y pasión deportiva. Referente en fútbol, básquet, hockey, natación y vóley. ¡Sumate a sus actividades!</p>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <a href="https://www.instagram.com/san_carlos_oficial/?hl=es" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> san_carlos_oficial</a>
                <a href="https://www.instagram.com/sancarlosfemenino" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> sancarlosfemenino</a>
                <a href="https://www.instagram.com/basquetsancarlos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> basquetsancarlos</a>
                <a href="https://www.instagram.com/hockeyclubsancarlos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> hockeyclubsancarlos</a>
                <a href="https://www.instagram.com/chapuzonp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> chapuzonp</a>
                <a href="https://www.instagram.com/voley_san_carlos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"><Instagram className="w-5 h-5" /> voley_san_carlos</a>
              </div>
              <p className="text-gray-600 text-center text-sm">Tel: 2478-427228<br/>Dirección: Daimo Bojanich 402, Capitán Sarmiento</p>
            </motion.div>
            {/* Club Independiente */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Users className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Club Independiente</h3>
              <p className="text-gray-700 text-center mb-4">Canchas de tenis, pádel, fútbol y básquet. Además, clases y actividades de funcional, danza, patín, vóley y taekwondo. Espacio de encuentro y desarrollo para todas las edades.</p>
              <a href="https://www.instagram.com/cai.capitansarmiento/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition"><Instagram className="w-5 h-5" /> cai.capitansarmiento</a>
            </motion.div>
            {/* CEF */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Trophy className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Centro de Educación Física</h3>
              <div className="text-orange-500 font-semibold mb-2">(CEF 120)</div>
              <p className="text-gray-700 text-center mb-4">Organismo público que promueve la actividad física, la recreación y el deporte para todas las edades. Ofrece clases, talleres y eventos abiertos a la comunidad.</p>
              <a href="https://www.instagram.com/cef120capsto/?hl=es" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition"><Instagram className="w-5 h-5" /> cef120capsto</a>
            </motion.div>
            {/* Club de Leones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Users className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Club de Leones</h3>
              <p className="text-gray-700 text-center mb-4">Entidad de servicio que impulsa acciones solidarias, educativas y culturales en beneficio de la comunidad sarmientina. ¡Sumate a sus proyectos y actividades!</p>
              <a href="https://www.instagram.com/clubdeleonescapsto/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition"><Instagram className="w-5 h-5" /> clubdeleonescapsto</a>
            </motion.div>
            {/* Rotary Club */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-orange-100 flex flex-col items-center"
            >
              <Users className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-red-900 mb-2 text-center">Rotary Club</h3>
              <p className="text-gray-700 text-center mb-4">Organización internacional dedicada a proyectos sociales, educativos y de salud, fomentando valores de solidaridad y cooperación local. ¡Conocé sus iniciativas!</p>
              <a href="https://www.instagram.com/rotarycapitansarmiento/?hl=es-la" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition"><Instagram className="w-5 h-5" /> rotarycapitansarmiento</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turf y Tradiciones */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-red-900 mb-6">Turf y Tradiciones</h2>
            <div className="space-y-6 text-gray-700">
              <p>Como Capital del Turf tenemos 3 encuentros anuales de Endurance, somos parte de la Ruta de los Haras, y estamos trabajando para la pronta inauguración del Museo Nacional del Caballo en el corazón de la ciudad, inmerso en un paseo gastronómico. Cabalgatas, jineteadas, desfiles criollos, peñas y más dan vida a nuestra ciudad en las fechas conmemorativas como fiestas patrias, día de la autonomía, día del Santo Patrono entre otras.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Espacio para imagen de Turf */}
            <img 
              src={capitalTurf} 
              alt="Turf y Tradiciones" 
              className="w-full h-96 object-cover rounded-xl shadow-lg border border-orange-100 bg-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* Cierre */}
      <section className="py-16 bg-gradient-to-r from-orange-200 via-orange-300 to-red-300 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Porque somos una ciudad en continuo crecimiento</h2>
            <p className="text-xl mb-8 text-white">
              Seguimos trabajando para hacer de Capitán Sarmiento la mejor ciudad para vivir.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white text-orange-700 hover:bg-orange-100 hover:text-orange-900 font-bold"
              asChild
            >
              <a href={whatsappBase} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" /> Contactar Cultura y Turismo
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadViva;
