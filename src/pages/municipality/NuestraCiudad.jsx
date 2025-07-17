
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Users, Calendar, Building, Landmark, Target, Eye, Trophy, Flag, Heart, Leaf, Shield, GraduationCap, Play, Instagram } from 'lucide-react';
import capitalTurfImg from '@/assets/images/nuestraciudad/capital-turf.jpg';
import banderaBonaerenseImg from '@/assets/images/nuestraciudad/bandera-bonaerense.jpg';
import estacionHistoricaImg from '@/assets/images/nuestraciudad/estacion-historica.jpg';
import iglesiaSanCarlosImg from '@/assets/images/nuestraciudad/iglesia-san-carlos.jpg';
import harasCaballosImg from '@/assets/images/nuestraciudad/haras-caballos.jpg';
import parqueNaturalImg from '@/assets/images/nuestraciudad/parque-natural.jpg';
import nuestraCiudadImg from '@/assets/images/nuestraciudad/nuestra-ciudad.jpg';
import plazaImg from '@/assets/images/nuestraciudad/plaza.jpg';
import cahuaneImg from '@/assets/images/nuestraciudad/cahuane.jpg';

const NuestraCiudad = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nuestra Ciudad - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce la historia, geografía y características de Capitán Sarmiento, cuna de la bandera bonaerense y capital nacional del turf." />
      </Helmet>



      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  En 1882 se habilitó la estación ferroviaria "Capitán Sarmiento" del Ferrocarril del Oeste, 
                  nombre que adoptaría nuestro pueblo. La ubicación estratégica, a 15km de distancia para 
                  recarga de agua de las locomotoras, marcó el inicio de nuestra ciudad.
                </p>
                <p>
                  El 11 de junio de 1884, un grupo de chacareros liderados por Gerardo Gómez suscribió 
                  el acta fundacional, dando origen oficial a Capitán Sarmiento. El trabajo incansable 
                  de inmigrantes italianos, españoles, irlandeses y franceses forjó el carácter de nuestra comunidad.
                </p>
                <p>
                  En 1961 se creó el Partido de Capitán Sarmiento, declarando a nuestra ciudad como 
                  cabecera del nuevo distrito, consolidando nuestra identidad como comunidad autónoma.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                src={nuestraCiudadImg}
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Vista de nuestra ciudad"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Misión y Visión</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro compromiso con el futuro de Capitán Sarmiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Consolidar al Municipio de Capitán Sarmiento como una institución altamente eficiente, 
                garantizando la transparencia y el acceso a la información pública, permitiendo que 
                la ciudadanía acceda a los contenidos de la gestión municipal mediante instrumentos 
                seguros y confiables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Queremos que nuestra ciudad crezca en los siete ejes de gobierno hasta transformarse 
                en la Mejor Ciudad para Vivir, que sea para todos los vecinos, y quienes quieran 
                proyectar un futuro de vida y de trabajo en Capitán Sarmiento, la mejor opción.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Qué hacemos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una ciudad de trabajadores, emprendedores y deportistas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Capital Nacional del Turf",
                description: "Somos la ciudad donde nacen y se crían más caballos por hectárea del país, cuna de grandes campeones mundiales de carrera, polo y otras razas.",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Ingeniería Genética",
                description: "Desde nuestra ciudad se produce ingeniería genética bovina que se exporta al mundo, y es origen de alimentos avícolas que se distribuyen a más de 56 países.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Industria Local",
                description: "Confeccionamos prendas de vestir en talleres de costura y tenemos una de las plantas avícolas más grandes del país, que emplea a más de 1100 trabajadores.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Gastronomía",
                description: "Tenemos fábricas de queso, donde se producen los más ricos de la región, y una creciente oferta gastronómica que atrae visitantes.",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Turismo Rural",
                description: "Contamos con una oferta hotelera campestre y propuestas como la Ruta de Los Haras y el futuro Museo Nacional del Caballo.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Artesanos y Deportistas",
                description: "Somos una ciudad de trabajadores del campo, emprendedores, artesanos y deportistas que mantienen vivas nuestras tradiciones.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandera Bonaerense */}
      <section className="py-20 bg-gradient-to-br from-blue-200 via-green-200 to-blue-300 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Flag className="w-16 h-16 mx-auto mb-6 text-blue-700" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cuna de la Bandera Bonaerense</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              En 1997, cinco alumnos de escuelas secundarias de nuestro distrito crearon la Bandera Bonaerense, 
              elegida por 270.000 votos (75% de los sufragios) entre alumnos de toda la provincia.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Documental de la Bandera Bonaerense</h3>
                <p className="text-gray-700 mb-6">
                  Conoce la historia completa de cómo nació nuestro símbolo provincial más importante, 
                  desde la creación hasta su oficialización.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Play className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                    <p className="text-gray-600">Video documental disponible próximamente</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={banderaBonaerenseImg}
                alt="Bandera Bonaerense de Capitán Sarmiento"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Qué visitar? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Qué se puede visitar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los atractivos turísticos y culturales de nuestra ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Museo Histórico",
                description: "Ubicado en la vieja estación que dio origen a la ciudad, con edificaciones antiguas y lugares históricos protegidos como patrimonio local.",
                icon: <Building className="w-6 h-6" />,
                image: estacionHistoricaImg
              },
              {
                title: "Centro de la Ciudad",
                description: "El corazón de Capitán Sarmiento donde se encuentra la Iglesia San Carlos, el Museo Histórico y numerosos negocios locales que conforman el centro comercial y cultural.",
                icon: <Landmark className="w-6 h-6" />,
                image: iglesiaSanCarlosImg
              },
              {
                title: "Museo a la Bandera Bonaerense",
                description: "Dedicado a preservar y difundir la historia de cómo nació nuestro símbolo provincial más importante, creado por alumnos de nuestro distrito.",
                icon: <Flag className="w-6 h-6" />,
                image: banderaBonaerenseImg
              },
              {
                title: "Plaza San Martín",
                description: "El espacio público más importante de la ciudad, punto de encuentro de vecinos. En navidad se arma un gran árbol con luces LED que ilumina toda la plaza.",
                icon: <Heart className="w-6 h-6" />,
                image: plazaImg
              },
              {
                title: "Parque Natural",
                description: "De primera categoría, ideal para visitar todo el año. Paseos a caballo, kayak, tirolesa de 50 metros, restaurant y cervecería artesanal.",
                icon: <Leaf className="w-6 h-6" />,
                image: parqueNaturalImg,
                button: {
                  label: 'Seguinos en Instagram',
                  url: 'https://www.instagram.com/parque.naturalcapitansarmiento/'
                }
              },
              {
                title: "Eventos Culturales",
                description: "Encuentro nacional de artesanos Cahuané, ferias de microemprendedores, jornadas de food trucks, encuentros de motos y más.",
                icon: <Trophy className="w-6 h-6" />,
                image: cahuaneImg,
                button: {
                  label: 'Seguinos en Instagram',
                  url: 'https://www.instagram.com/cahuane.encuentro/?hl=es'
                }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {item.button && (
                  <a
                    href={item.button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    <Instagram className="w-4 h-4" />
                    {item.button.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos de la Ciudad */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Datos de Nuestra Ciudad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce las características principales que definen a Capitán Sarmiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Población",
                value: "más de 40.000",
                description: "Habitantes aproximados",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Distancia",
                value: "145 km",
                description: "De Buenos Aires",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Fundación",
                value: "1884",
                description: "Año de fundación",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Autonomía",
                value: "1961",
                description: "Creación del partido",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestraCiudad;
