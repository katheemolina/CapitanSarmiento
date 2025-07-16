
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { GraduationCap, Book, Users, Award, Lightbulb, Target } from 'lucide-react';

const CiudadEducadora = () => {
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
        <title>Ciudad Educadora - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce las iniciativas educativas y programas de formación del Municipio de Capitán Sarmiento para toda la comunidad." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad Educadora</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Iniciativas educativas y programas de formación para toda la comunidad de Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programas Educativos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas Educativos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas integrales para promover el aprendizaje continuo en nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Book className="w-8 h-8" />,
                title: "Biblioteca Municipal",
                description: "Espacio de estudio y consulta con amplio catálogo de libros y recursos digitales",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Talleres para Adultos",
                description: "Cursos de alfabetización, informática y oficios para adultos mayores",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovación Educativa",
                description: "Programas de ciencia y tecnología para jóvenes y estudiantes",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Becas de Estudio",
                description: "Apoyo económico para estudiantes destacados de la comunidad",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Capacitación Laboral",
                description: "Cursos técnicos y de oficios orientados a la inserción laboral",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Apoyo Escolar",
                description: "Programas de refuerzo educativo y apoyo a estudiantes",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${program.color} text-white mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instituciones Educativas */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Instituciones Educativas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Red educativa que acompaña el crecimiento de nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                level: "Educación Inicial",
                institutions: [
                  "Jardín Municipal N° 1",
                  "Jardín Municipal N° 2",
                  "Centro de Primera Infancia"
                ],
                description: "Espacios de contención y desarrollo para los más pequeños",
                image: "Jardín de infantes con niños jugando y aprendiendo"
              },
              {
                level: "Educación Primaria",
                institutions: [
                  "Escuela Primaria N° 1",
                  "Escuela Primaria N° 2",
                  "Escuela Rural N° 3"
                ],
                description: "Formación integral en los primeros años de escolaridad",
                image: "Escuela primaria con estudiantes en el aula"
              },
              {
                level: "Educación Secundaria",
                institutions: [
                  "Escuela Secundaria N° 1",
                  "Escuela Técnica Municipal",
                  "Centro de Educación de Adultos"
                ],
                description: "Preparación para el futuro académico y laboral",
                image: "Escuela secundaria con estudiantes en laboratorio"
              },
              {
                level: "Educación Superior",
                institutions: [
                  "Instituto Terciario Municipal",
                  "Centro Universitario",
                  "Extensión Universitaria"
                ],
                description: "Oportunidades de educación superior en la ciudad",
                image: "Instituto terciario con estudiantes universitarios"
              }
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${level.level} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{level.level}</h3>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <ul className="space-y-2">
                    {level.institutions.map((institution, instIndex) => (
                      <li key={instIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {institution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas Educativas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Logros Educativos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que reflejan nuestro compromiso con la educación de calidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "3,200",
                label: "Estudiantes",
                description: "En todos los niveles",
                color: "text-blue-600"
              },
              {
                value: "95%",
                label: "Tasa de alfabetización",
                description: "En adultos mayores",
                color: "text-green-600"
              },
              {
                value: "180",
                label: "Docentes",
                description: "En el sistema educativo",
                color: "text-purple-600"
              },
              {
                value: "12",
                label: "Instituciones",
                description: "Educativas municipales",
                color: "text-orange-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Futuros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proyectos Futuros</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Continuamos trabajando para ampliar y mejorar las oportunidades educativas 
                  en nuestra ciudad, con proyectos innovadores que responden a las necesidades 
                  de la comunidad.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Centro de Innovación Educativa</h4>
                      <p className="text-sm text-gray-600">Espacio equipado con tecnología de vanguardia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Programa de Intercambio</h4>
                      <p className="text-sm text-gray-600">Convenios con instituciones de otras ciudades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Campus Universitario</h4>
                      <p className="text-sm text-gray-600">Ampliación de la oferta de educación superior</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-purple-600 hover:bg-purple-700"
                onClick={handleFeatureClick}
              >
                Conocer más proyectos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Proyectos educativos futuros"
               src="https://images.unsplash.com/photo-1694532409338-e5dceca0b2e4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">La educación es el futuro</h2>
            <p className="text-xl mb-8">
              Únete a nuestros programas educativos y forma parte del crecimiento de nuestra comunidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600"
                onClick={handleFeatureClick}
              >
                Inscribirse a talleres
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Información educativa
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadEducadora;
