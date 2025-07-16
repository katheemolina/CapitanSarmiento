
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Home, MapPin, Users, Calendar, Building, Landmark } from 'lucide-react';

const NuestraCiudad = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Nuestra Ciudad - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce la historia, geografía y características de Capitán Sarmiento, cuna de la bandera bonaerense y capital nacional del turf." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Home className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestra Ciudad</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Descubre la historia, geografía y características que hacen única a Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Historia de Capitán Sarmiento</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Fundada en 1889, Capitán Sarmiento debe su nombre al militar y político argentino 
                  Domingo Faustino Sarmiento, quien fuera presidente de la Nación entre 1868 y 1874.
                </p>
                <p>
                  Nuestra ciudad se desarrolló inicialmente como un importante centro ferroviario, 
                  lo que favoreció el crecimiento económico y poblacional de la región durante 
                  las primeras décadas del siglo XX.
                </p>
                <p>
                  A lo largo de su historia, Capitán Sarmiento se ha destacado por ser cuna de 
                  importantes símbolos provinciales y por su tradición en el turf, convirtiéndose 
                  en un referente cultural y deportivo de la Provincia de Buenos Aires.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Historia de Capitán Sarmiento - edificios históricos"
               src="https://images.unsplash.com/photo-1589159042796-16b0b1fb615b" />
            </motion.div>
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
                value: "14,500",
                description: "Habitantes aproximados",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Superficie",
                value: "588 km²",
                description: "Extensión territorial",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Fundación",
                value: "1889",
                description: "Año de fundación",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Altitud",
                value: "35 msnm",
                description: "Metros sobre el nivel del mar",
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

      {/* Geografía y Ubicación */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Vista panorámica de Capitán Sarmiento"
               src="https://images.unsplash.com/photo-1568594273551-55cec46944fe" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Geografía y Ubicación</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Capitán Sarmiento se encuentra ubicada en el noroeste de la Provincia de Buenos Aires, 
                  a 180 kilómetros de la Ciudad Autónoma de Buenos Aires.
                </p>
                <p>
                  Nuestro territorio se caracteriza por la típica llanura pampeana, con suelos fértiles que favorecen las actividades agropecuarias y ganaderas que constituyen la base 
                  económica de la región.
                </p>
                <p>
                  El clima es templado húmedo, con temperaturas medias anuales de 16°C, lo que 
                  permite el desarrollo de diversas actividades durante todo el año.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">180 km de Buenos Aires</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Región pampeana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Cabecera del partido homónimo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lugares Emblemáticos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lugares Emblemáticos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce los sitios más representativos de nuestra ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plaza Principal",
                description: "Corazón de la ciudad donde se realizan los principales eventos cívicos",
                icon: <Landmark className="w-6 h-6" />,
                image: "Plaza principal de Capitán Sarmiento con monumentos y árboles"
              },
              {
                title: "Museo de la Bandera",
                description: "Sitio histórico dedicado a la bandera bonaerense",
                icon: <Building className="w-6 h-6" />,
                image: "Museo de la Bandera Bonaerense con exhibiciones históricas"
              },
              {
                title: "Hipódromo Municipal",
                description: "Sede de las carreras de caballos más importantes del país",
                icon: <Home className="w-6 h-6" />,
                image: "Hipódromo de Capitán Sarmiento con pista y tribunas"
              },
              {
                title: "Estación de Tren",
                description: "Patrimonio histórico ferroviario de la ciudad",
                icon: <Building className="w-6 h-6" />,
                image: "Estación de tren histórica con arquitectura ferroviaria argentina"
              },
              {
                title: "Centro Cultural",
                description: "Espacio dedicado a las actividades artísticas y culturales",
                icon: <Landmark className="w-6 h-6" />,
                image: "Centro cultural con actividades artísticas y exposiciones"
              },
              {
                title: "Parque Municipal",
                description: "Área verde para el esparcimiento familiar",
                icon: <Home className="w-6 h-6" />,
                image: "Parque municipal con áreas verdes y juegos para niños"
              }
            ].map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={handleFeatureClick}
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${place.title} - Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-600 mr-3">{place.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{place.title}</h3>
                  </div>
                  <p className="text-gray-600">{place.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Conoce más sobre nuestra ciudad</h2>
            <p className="text-xl mb-8">
              Te invitamos a descubrir todo lo que Capitán Sarmiento tiene para ofrecerte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={handleFeatureClick}
              >
                Guía turística
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Contactar turismo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NuestraCiudad;
