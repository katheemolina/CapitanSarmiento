
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, Heart, Droplets, Sun, TreePine } from 'lucide-react';

const CiudadVerde = () => {
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
        <title>Ciudad Verde y Saludable - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce los programas ambientales y de salud pública del Municipio de Capitán Sarmiento para una mejor calidad de vida." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Leaf className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad Verde y Saludable</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Programas ambientales y de salud pública para una mejor calidad de vida en Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programas Ambientales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas Ambientales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas para proteger nuestro medio ambiente y crear un futuro sustentable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TreePine className="w-8 h-8" />,
                title: "Forestación Urbana",
                description: "Plantación de árboles nativos en calles, plazas y espacios públicos",
                color: "from-green-500 to-green-600",
                image: "Plantación de árboles en espacios urbanos de la ciudad"
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Reciclaje Municipal",
                description: "Sistema integral de separación y reciclaje de residuos domiciliarios",
                color: "from-blue-500 to-blue-600",
                image: "Centro de reciclaje con separación de residuos"
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Gestión del Agua",
                description: "Programas de conservación y uso eficiente del recurso hídrico",
                color: "from-cyan-500 to-cyan-600",
                image: "Sistema de gestión de agua y conservación hídrica"
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Energías Renovables",
                description: "Instalación de paneles solares en edificios públicos",
                color: "from-yellow-500 to-orange-500",
                image: "Paneles solares instalados en edificios municipales"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Espacios Verdes",
                description: "Creación y mantenimiento de parques y áreas recreativas",
                color: "from-emerald-500 to-emerald-600",
                image: "Parques y espacios verdes con áreas recreativas"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Educación Ambiental",
                description: "Talleres y campañas de concientización ecológica",
                color: "from-teal-500 to-teal-600",
                image: "Taller de educación ambiental con niños y adultos"
              }
            ].map((program, index) => (
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
                  alt={`${program.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1591206246224-04b4624adef4" />
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${program.color} text-white mb-4`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salud Pública */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas de Salud Pública</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicios de salud integral para el bienestar de toda la comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Centro de Salud Municipal",
                description: "Atención médica primaria con profesionales especializados",
                services: ["Medicina general", "Pediatría", "Ginecología", "Odontología"],
                image: "Centro de salud municipal con médicos atendiendo pacientes"
              },
              {
                title: "Programas Preventivos",
                description: "Campañas de prevención y promoción de la salud",
                services: ["Vacunación", "Control de enfermedades", "Salud materno-infantil", "Salud del adulto mayor"],
                image: "Campaña de vacunación y prevención de salud"
              },
              {
                title: "Salud Mental",
                description: "Apoyo psicológico y programas de bienestar emocional",
                services: ["Consultas psicológicas", "Grupos de apoyo", "Talleres de bienestar", "Atención de crisis"],
                image: "Consulta de salud mental y apoyo psicológico"
              },
              {
                title: "Actividad Física",
                description: "Programas para promover el ejercicio y la vida activa",
                services: ["Gimnasia para adultos mayores", "Actividades aeróbicas", "Deportes recreativos", "Caminatas grupales"],
                image: "Actividades físicas grupales en espacios públicos"
              }
            ].map((health, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${health.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{health.title}</h3>
                  <p className="text-gray-600 mb-4">{health.description}</p>
                  <ul className="space-y-2">
                    {health.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-700">
                        <Heart className="w-4 h-4 text-green-500 mr-3" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores Ambientales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Indicadores de Sustentabilidad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que demuestran nuestro compromiso con el medio ambiente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Árboles plantados",
                description: "En el último año",
                color: "text-green-600",
                icon: <TreePine className="w-8 h-8" />
              },
              {
                value: "60%",
                label: "Residuos reciclados",
                description: "Del total generado",
                color: "text-blue-600",
                icon: <Recycle className="w-8 h-8" />
              },
              {
                value: "25%",
                label: "Reducción energética",
                description: "En edificios públicos",
                color: "text-yellow-600",
                icon: <Sun className="w-8 h-8" />
              },
              {
                value: "95%",
                label: "Cobertura de salud",
                description: "De la población",
                color: "text-red-600",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`${indicator.color} mb-4 flex justify-center`}>
                  {indicator.icon}
                </div>
                <div className={`text-4xl font-bold ${indicator.color} mb-2`}>{indicator.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{indicator.label}</h3>
                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos Sustentables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Consejos para una Vida Sustentable</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Cada acción cuenta para construir una ciudad más verde y saludable. 
                  Aquí tienes algunas recomendaciones para contribuir desde tu hogar.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Separa tus residuos</h4>
                      <p className="text-sm text-gray-600">Clasifica orgánicos, reciclables y no reciclables</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Ahorra agua y energía</h4>
                      <p className="text-sm text-gray-600">Usa electrodomésticos eficientes y cierra canillas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Usa transporte sustentable</h4>
                      <p className="text-sm text-gray-600">Camina, usa bicicleta o transporte público</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Consume responsablemente</h4>
                      <p className="text-sm text-gray-600">Elige productos locales y reduce el desperdicio</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-green-600 hover:bg-green-700"
                onClick={handleFeatureClick}
              >
                Guía completa de sustentabilidad
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Familia practicando vida sustentable"
               src="https://images.unsplash.com/photo-1669914071836-56d95617f7cb" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Construyamos juntos una ciudad sustentable</h2>
            <p className="text-xl mb-8">
              Tu participación es fundamental para crear un futuro más verde y saludable para todos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600"
                onClick={handleFeatureClick}
              >
                Unirse a programas ambientales
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Servicios de salud
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadVerde;
