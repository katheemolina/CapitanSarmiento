
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Home, 
  Shield, 
  GraduationCap, 
  Heart, 
  Leaf, 
  Briefcase, 
  Users,
  ArrowRight
} from 'lucide-react';

const Municipality = () => {
  const ejes = [
    {
      title: "Nuestra Ciudad",
      description: "Conoce la historia, geografía y características que hacen única a Capitán Sarmiento",
      icon: <Home className="w-8 h-8" />,
      path: "/municipio/nuestra-ciudad",
      color: "from-blue-500 to-blue-600",
      image: "Vista panorámica de Capitán Sarmiento con edificios municipales"
    },
    {
      title: "Ciudad Segura",
      description: "Políticas y programas para garantizar la seguridad de todos los ciudadanos",
      icon: <Shield className="w-8 h-8" />,
      path: "/municipio/ciudad-segura",
      color: "from-green-500 to-green-600",
      image: "Patrulla policial y cámaras de seguridad en la ciudad"
    },
    {
      title: "Ciudad Educadora",
      description: "Iniciativas educativas y programas de formación para toda la comunidad",
      icon: <GraduationCap className="w-8 h-8" />,
      path: "/municipio/ciudad-educadora",
      color: "from-purple-500 to-purple-600",
      image: "Escuela moderna con estudiantes y maestros en actividades educativas"
    },
    {
      title: "Ciudad Viva",
      description: "Actividades culturales, deportivas y recreativas que dan vida a nuestra ciudad",
      icon: <Heart className="w-8 h-8" />,
      path: "/municipio/ciudad-viva",
      color: "from-red-500 to-red-600",
      image: "Festival cultural con música y bailes tradicionales argentinos"
    },
    {
      title: "Ciudad Verde y Saludable",
      description: "Programas ambientales y de salud pública para una mejor calidad de vida",
      icon: <Leaf className="w-8 h-8" />,
      path: "/municipio/ciudad-verde",
      color: "from-emerald-500 to-emerald-600",
      image: "Parque verde con árboles y espacios recreativos saludables"
    },
    {
      title: "Ciudad de Oportunidades",
      description: "Desarrollo económico y generación de empleo para el crecimiento local",
      icon: <Briefcase className="w-8 h-8" />,
      path: "/municipio/ciudad-oportunidades",
      color: "from-orange-500 to-orange-600",
      image: "Centro de empleo con personas en capacitación laboral"
    },
    {
      title: "Ciudad Amigable",
      description: "Inclusión social y programas para una convivencia armoniosa entre vecinos",
      icon: <Users className="w-8 h-8" />,
      path: "/municipio/ciudad-amigable",
      color: "from-indigo-500 to-indigo-600",
      image: "Vecinos de diferentes edades compartiendo en plaza comunitaria"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Municipio - Capitán Sarmiento</title>
        <meta name="description" content="Conoce los ejes de gestión del Municipio de Capitán Sarmiento: ciudad segura, educadora, viva, verde, de oportunidades y amigable." />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestro Municipio</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Descubre los ejes de gestión que guían el desarrollo de Capitán Sarmiento hacia un futuro próspero y sustentable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ejes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ejes de Gestión Municipal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada eje representa nuestro compromiso con diferentes aspectos del desarrollo integral de nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ejes.map((eje, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={eje.path}
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img  
                      className="w-full h-48 object-cover" 
                      alt={`${eje.title} - Municipio de Capitán Sarmiento`}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${eje.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4 text-white">
                      {eje.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{eje.title}</h3>
                    <p className="text-gray-600 mb-4">{eje.description}</p>
                    
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>Conocer más</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
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
            <h2 className="text-3xl font-bold mb-4">¿Tienes alguna consulta?</h2>
            <p className="text-xl mb-8">
              Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros programas y servicios.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contactar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Municipality;
