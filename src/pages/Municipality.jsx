
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

// Importar imágenes
import nuestraCiudadImg from '@/assets/images/municipality/nuestra-ciudad.jpg';
import ciudadSeguraImg from '@/assets/images/municipality/ciudad-segura.jpg';
import ciudadEducadoraImg from '@/assets/images/municipality/ciudad-educadora.jpg';
import ciudadVivaImg from '@/assets/images/municipality/ciudad-viva.jpg';
import ciudadVerdeImg from '@/assets/images/municipality/ciudad-verde.jpg';
import ciudadOportunidadesImg from '@/assets/images/municipality/ciudad-oportunidades.jpg';
import ciudadAmigableImg from '@/assets/images/municipality/ciudad-amigable.jpg';
import empleadosImg from '@/assets/images/municipality/empleados.jpg';

// Importar iconos personalizados
import nuestraCiudadIcon from '@/assets/icons/nuestra-ciudad-icon.svg';
import ciudadSeguraIcon from '@/assets/icons/ciudad-segura-icon.svg';
import ciudadVivaIcon from '@/assets/icons/ciudad-viva-icon.svg';
import ciudadVerdeIcon from '@/assets/icons/ciudad-verde-icon.svg';
import ciudadOportunidadesIcon from '@/assets/icons/ciudad-oportunidades-icon.svg';
import ciudadAmigableIcon from '@/assets/icons/ciudad-amigable-icon.svg';
import ciudadEducadoraIcon from '@/assets/icons/ciudad-educadora-icon.svg';

const Municipality = () => {
  const ejes = [
    {
      title: "Nuestra Ciudad",
      description: "Conoce la historia, geografía y características que hacen única a Capitán Sarmiento",
      icon: <img src={nuestraCiudadIcon} alt="Nuestra Ciudad" className="w-12 h-12" />,
      path: "/municipio/nuestra-ciudad",
      color: "from-blue-500 to-blue-600",
      overlay: "bg-gradient-to-t from-blue-500 to-blue-600 opacity-10",
      image: nuestraCiudadImg
    },
    {
      title: "Ciudad Segura",
      description: "Políticas y programas para garantizar la seguridad de todos los ciudadanos",
      icon: <img src={ciudadSeguraIcon} alt="Ciudad Segura" className="w-12 h-12" />,
      path: "/municipio/ciudad-segura",
      color: "from-blue-500 to-blue-700",
      overlay: "bg-gradient-to-t from-blue-500 to-blue-700 opacity-30",
      image: ciudadSeguraImg
    },
    {
      title: "Ciudad Educadora",
      description: "Iniciativas educativas y programas de formación para toda la comunidad",
      icon: <img src={ciudadEducadoraIcon} alt="Ciudad Educadora" className="w-12 h-12" />,
      path: "/municipio/ciudad-educadora",
      color: "from-purple-500 to-purple-600",
      overlay: "bg-gradient-to-t from-purple-500 to-purple-600 opacity-30",
      image: ciudadEducadoraImg
    },
    {
      title: "Ciudad Viva",
      description: "Actividades culturales, deportivas y recreativas que dan vida a nuestra ciudad",
      icon: <img src={ciudadVivaIcon} alt="Ciudad Viva" className="w-12 h-12" />,
      path: "/municipio/ciudad-viva",
      color: "from-red-500 to-red-600",
      overlay: "bg-gradient-to-t from-red-500 to-red-600 opacity-30",
      image: ciudadVivaImg
    },
    {
      title: "Ciudad Verde y Saludable",
      description: "Programas ambientales y de salud pública para una mejor calidad de vida",
      icon: <img src={ciudadVerdeIcon} alt="Ciudad Verde" className="w-12 h-12" />,
      path: "/municipio/ciudad-verde",
      color: "from-emerald-500 to-emerald-600",
      overlay: "bg-gradient-to-t from-emerald-500 to-emerald-600 opacity-30",
      image: ciudadVerdeImg
    },
    {
      title: "Ciudad de Oportunidades",
      description: "Desarrollo económico y generación de empleo para el crecimiento local",
      icon: <img src={ciudadOportunidadesIcon} alt="Ciudad de Oportunidades" className="w-12 h-12" />,
      path: "/municipio/ciudad-oportunidades",
      color: "from-orange-500 to-orange-600",
      overlay: "bg-gradient-to-t from-orange-500 to-orange-600 opacity-30",
      image: ciudadOportunidadesImg
    },
    {
      title: "Ciudad Amigable",
      description: "Inclusión social y programas para una convivencia armoniosa entre vecinos",
      icon: <img src={ciudadAmigableIcon} alt="Ciudad Amigable" className="w-12 h-12" />,
      path: "/municipio/ciudad-amigable",
      color: "from-rose-500 to-rose-700",
      overlay: "bg-gradient-to-t from-rose-500 to-rose-700 opacity-30",
      image: ciudadAmigableImg
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Municipio - Capitán Sarmiento</title>
        <meta name="description" content="Conoce los ejes de gestión del Municipio de Capitán Sarmiento: ciudad segura, educadora, viva, verde, de oportunidades y amigable." />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 py-20 md:py-32">
          {/* Texto a la izquierda */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestro Municipio</h1>
            <p className="text-lg md:text-xl text-blue-800 mb-6 max-w-2xl mx-auto md:mx-0">
              Los ejes de gestión son el motor de nuestro municipio. A través de ellos, trabajamos para que Capitán Sarmiento sea una ciudad más segura, educadora, verde, viva, de oportunidades y amigable. Te invitamos a conocerlos y ser parte de una ciudad en constante evolución
            </p>
          </motion.div>
          {/* Imagen a la derecha con animación */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={empleadosImg} 
              alt="Empleados municipales de Capitán Sarmiento" 
              className="w-full max-w-lg h-72 md:h-96 object-cover object-center rounded-xl shadow-lg border border-blue-100 bg-white" 
            />
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
                      src={eje.image}
                    />
                    <div className={`absolute inset-0 ${eje.overlay}`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                        {eje.icon}
                      </div>
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
      <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">¿Tienes alguna consulta?</h2>
            <p className="text-xl mb-8 text-blue-800">
              Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros programas y servicios.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow"
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
