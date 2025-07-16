
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Briefcase, TrendingUp, Users, Building, Lightbulb, Target } from 'lucide-react';

const CiudadOportunidades = () => {
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
        <title>Ciudad de Oportunidades - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce los programas de desarrollo económico y generación de empleo del Municipio de Capitán Sarmiento para el crecimiento local." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad de Oportunidades</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Desarrollo económico y generación de empleo para el crecimiento local de Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programas de Empleo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas de Empleo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas para crear oportunidades laborales y fomentar el desarrollo profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Bolsa de Trabajo Municipal",
                description: "Plataforma que conecta empleadores locales con trabajadores de la ciudad",
                color: "from-blue-500 to-blue-600",
                image: "Oficina de empleo con personas buscando trabajo"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Capacitación Laboral",
                description: "Cursos técnicos y de oficios orientados a las demandas del mercado local",
                color: "from-green-500 to-green-600",
                image: "Taller de capacitación laboral con herramientas y estudiantes"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Apoyo a Emprendedores",
                description: "Asesoramiento y financiamiento para nuevos proyectos empresariales",
                color: "from-purple-500 to-purple-600",
                image: "Reunión de emprendedores con asesoramiento empresarial"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Desarrollo Industrial",
                description: "Promoción de la instalación de nuevas industrias en la ciudad",
                color: "from-red-500 to-red-600",
                image: "Parque industrial con fábricas y desarrollo económico"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Microcréditos",
                description: "Financiamiento accesible para pequeños comercios y emprendimientos",
                color: "from-yellow-500 to-orange-500",
                image: "Pequeño comercio local con emprendedor atendiendo"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Primer Empleo",
                description: "Programa especial para la inserción laboral de jóvenes",
                color: "from-indigo-500 to-indigo-600",
                image: "Jóvenes en su primer día de trabajo en oficina"
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

      {/* Sectores Económicos */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sectores Económicos Principales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los pilares económicos que sostienen el desarrollo de nuestra ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sector Agropecuario",
                description: "Base tradicional de nuestra economía con producción ganadera y agrícola",
                activities: ["Ganadería bovina", "Cultivo de soja y maíz", "Producción lechera", "Agricultura familiar"],
                percentage: "45%",
                image: "Campo con ganado y cultivos en Capitán Sarmiento"
              },
              {
                title: "Sector Servicios",
                description: "Comercio, turismo y servicios profesionales en crecimiento",
                activities: ["Comercio local", "Turismo rural", "Servicios profesionales", "Gastronomía"],
                percentage: "30%",
                image: "Centro comercial y servicios en la ciudad"
              },
              {
                title: "Sector Industrial",
                description: "Industrias alimentarias y manufactureras en desarrollo",
                activities: ["Industria alimentaria", "Manufacturas", "Construcción", "Logística"],
                percentage: "20%",
                image: "Industria local con trabajadores y maquinaria"
              },
              {
                title: "Sector Público",
                description: "Empleo público municipal, provincial y nacional",
                activities: ["Administración pública", "Educación", "Salud", "Seguridad"],
                percentage: "5%",
                image: "Oficinas públicas con empleados municipales"
              }
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${sector.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1694659628111-f436795f10d7" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{sector.title}</h3>
                    <span className="text-2xl font-bold text-orange-600">{sector.percentage}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <ul className="space-y-2">
                    {sector.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores Económicos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Indicadores de Desarrollo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que reflejan el crecimiento económico de nuestra ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "6.2%",
                label: "Tasa de desempleo",
                description: "Por debajo del promedio nacional",
                color: "text-green-600",
                trend: "↓"
              },
              {
                value: "150",
                label: "Nuevos empleos",
                description: "Creados en el último año",
                color: "text-blue-600",
                trend: "↑"
              },
              {
                value: "85",
                label: "Emprendimientos",
                description: "Apoyados por el municipio",
                color: "text-purple-600",
                trend: "↑"
              },
              {
                value: "$2.5M",
                label: "Inversión privada",
                description: "Atraída en 2024",
                color: "text-orange-600",
                trend: "↑"
              }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`text-4xl font-bold ${indicator.color}`}>{indicator.value}</div>
                  <span className={`text-2xl ml-2 ${indicator.color}`}>{indicator.trend}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{indicator.label}</h3>
                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historias de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce las experiencias de quienes han encontrado oportunidades en nuestra ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Emprendedora",
                story: "Gracias al programa de microcréditos pude abrir mi panadería. Hoy empleo a 5 personas de la comunidad.",
                image: "María González en su panadería con empleados"
              },
              {
                name: "Carlos Rodríguez",
                role: "Técnico Industrial",
                story: "Los cursos de capacitación me permitieron conseguir trabajo en la nueva fábrica. Cambió mi vida completamente.",
                image: "Carlos Rodríguez trabajando en fábrica industrial"
              },
              {
                name: "Ana Martín",
                role: "Joven Profesional",
                story: "El programa Primer Empleo me dio la oportunidad de iniciar mi carrera profesional en mi propia ciudad.",
                image: "Ana Martín en oficina trabajando como profesional"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`Historia de éxito - ${testimonial.name}`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-orange-600 font-medium">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.story}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Tu oportunidad te está esperando</h2>
            <p className="text-xl mb-8">
              Únete a los programas de desarrollo económico y forma parte del crecimiento de nuestra ciudad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600"
                onClick={handleFeatureClick}
              >
                Buscar empleo
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Iniciar emprendimiento
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadOportunidades;
