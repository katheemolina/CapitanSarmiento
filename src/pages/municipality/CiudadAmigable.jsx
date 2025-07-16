
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Users, Heart, FolderHeart as HandHeart, Smile, Home, Shield } from 'lucide-react';

const CiudadAmigable = () => {
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
        <title>Ciudad Amigable - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce los programas de inclusión social del Municipio de Capitán Sarmiento para una convivencia armoniosa entre vecinos." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad Amigable</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Inclusión social y programas para una convivencia armoniosa entre todos los vecinos de Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programas de Inclusión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas de Inclusión Social</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas que promueven la integración y el bienestar de todos los miembros de nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Adultos Mayores",
                description: "Programas especiales para el bienestar y participación activa de nuestros mayores",
                color: "from-pink-500 to-pink-600",
                image: "Adultos mayores participando en actividades recreativas"
              },
              {
                icon: <Smile className="w-8 h-8" />,
                title: "Personas con Discapacidad",
                description: "Servicios de apoyo y programas de integración para personas con capacidades diferentes",
                color: "from-blue-500 to-blue-600",
                image: "Personas con discapacidad en actividades inclusivas"
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Familias Vulnerables",
                description: "Asistencia social y programas de apoyo para familias en situación de vulnerabilidad",
                color: "from-green-500 to-green-600",
                image: "Asistencia social a familias en centro comunitario"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Integración Comunitaria",
                description: "Actividades que fomentan la participación y el encuentro entre vecinos",
                color: "from-purple-500 to-purple-600",
                image: "Vecinos participando en actividades comunitarias"
              },
              {
                icon: <HandHeart className="w-8 h-8" />,
                title: "Voluntariado Social",
                description: "Red de voluntarios que colaboran en diferentes programas sociales",
                color: "from-orange-500 to-orange-600",
                image: "Voluntarios ayudando en programas sociales comunitarios"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Prevención de Violencia",
                description: "Programas de prevención y atención de situaciones de violencia familiar",
                color: "from-red-500 to-red-600",
                image: "Centro de atención y prevención de violencia"
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

      {/* Servicios Sociales */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Sociales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Red integral de servicios para atender las necesidades de toda la comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Centro de Desarrollo Infantil",
                description: "Cuidado y estimulación temprana para niños de 0 a 5 años",
                services: ["Guardería municipal", "Estimulación temprana", "Apoyo nutricional", "Talleres para padres"],
                image: "Centro de desarrollo infantil con niños jugando"
              },
              {
                title: "Centro de Día para Adultos Mayores",
                description: "Espacio de encuentro y actividades para personas mayores",
                services: ["Actividades recreativas", "Talleres de memoria", "Atención médica", "Comedor comunitario"],
                image: "Centro de día con adultos mayores en actividades"
              },
              {
                title: "Programa de Asistencia Alimentaria",
                description: "Apoyo nutricional para familias en situación vulnerable",
                services: ["Entrega de alimentos", "Comedores comunitarios", "Huertas familiares", "Educación nutricional"],
                image: "Programa de asistencia alimentaria con distribución"
              },
              {
                title: "Centro de la Mujer",
                description: "Servicios integrales para el empoderamiento femenino",
                services: ["Asesoramiento legal", "Apoyo psicológico", "Capacitación laboral", "Prevención de violencia"],
                image: "Centro de la mujer con servicios de apoyo"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${service.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <Heart className="w-4 h-4 text-indigo-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impacto en la Comunidad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que demuestran nuestro compromiso con la inclusión social
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "1,200",
                label: "Familias asistidas",
                description: "Reciben apoyo social",
                color: "text-pink-600",
                icon: <Home className="w-8 h-8" />
              },
              {
                value: "350",
                label: "Adultos mayores",
                description: "Participan en programas",
                color: "text-blue-600",
                icon: <Heart className="w-8 h-8" />
              },
              {
                value: "180",
                label: "Voluntarios activos",
                description: "Colaboran regularmente",
                color: "text-green-600",
                icon: <HandHeart className="w-8 h-8" />
              },
              {
                value: "95%",
                label: "Satisfacción",
                description: "De usuarios de servicios",
                color: "text-purple-600",
                icon: <Smile className="w-8 h-8" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Participar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cómo Participar</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Una ciudad amigable se construye con la participación de todos. 
                  Hay muchas formas de involucrarte y contribuir al bienestar de nuestra comunidad.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Voluntariado</h4>
                      <p className="text-sm text-gray-600">Únete a nuestros programas de voluntariado social</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Donaciones</h4>
                      <p className="text-sm text-gray-600">Colabora con donaciones para programas sociales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Propuestas</h4>
                      <p className="text-sm text-gray-600">Presenta ideas para mejorar la inclusión social</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Difusión</h4>
                      <p className="text-sm text-gray-600">Ayuda a difundir nuestros programas sociales</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-indigo-600 hover:bg-indigo-700"
                onClick={handleFeatureClick}
              >
                Quiero participar
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Participación comunitaria en programas sociales"
               src="https://images.unsplash.com/photo-1698795635824-241edc32eccd" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Juntos construimos una ciudad más amigable</h2>
            <p className="text-xl mb-8">
              Tu participación es fundamental para crear una comunidad inclusiva donde todos tengan su lugar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-indigo-600"
                onClick={handleFeatureClick}
              >
                Solicitar asistencia
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Ser voluntario
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadAmigable;
