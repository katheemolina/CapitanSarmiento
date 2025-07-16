
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Shield, Camera, Phone, Users, AlertTriangle, MapPin } from 'lucide-react';

const CiudadSegura = () => {
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
        <title>Ciudad Segura - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce las políticas y programas de seguridad del Municipio de Capitán Sarmiento para garantizar la protección de todos los ciudadanos." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad Segura</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Políticas y programas para garantizar la seguridad de todos los ciudadanos de Capitán Sarmiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programas de Seguridad */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas de Seguridad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas integrales para crear un entorno seguro para toda la comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Sistema de Videovigilancia",
                description: "Red de cámaras de seguridad distribuidas estratégicamente por toda la ciudad",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Patrullaje Preventivo",
                description: "Recorridos regulares de seguridad en todos los barrios de la ciudad",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Línea de Emergencias",
                description: "Servicio telefónico 24/7 para atención de emergencias y denuncias",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Prevención del Delito",
                description: "Programas educativos y de concientización sobre seguridad ciudadana",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Puntos Seguros",
                description: "Ubicaciones estratégicas con presencia policial permanente",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad Escolar",
                description: "Protección especial en zonas educativas durante horarios escolares",
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

      {/* Estadísticas de Seguridad */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados de Nuestras Políticas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los números que demuestran el compromiso con la seguridad ciudadana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "85%",
                label: "Reducción de delitos",
                description: "En los últimos 2 años",
                color: "text-green-600"
              },
              {
                value: "24/7",
                label: "Monitoreo continuo",
                description: "Centro de operaciones",
                color: "text-blue-600"
              },
              {
                value: "150+",
                label: "Cámaras instaladas",
                description: "En puntos estratégicos",
                color: "text-purple-600"
              },
              {
                value: "3 min",
                label: "Tiempo de respuesta",
                description: "Promedio de emergencias",
                color: "text-orange-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contactos de Emergencia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contactos de Emergencia</h2>
              <p className="text-lg text-gray-700 mb-8">
                Mantén estos números siempre a mano para cualquier situación de emergencia
              </p>

              <div className="space-y-6">
                {[
                  {
                    service: "Policía Local",
                    number: "101",
                    description: "Emergencias policiales y seguridad"
                  },
                  {
                    service: "Bomberos",
                    number: "100",
                    description: "Incendios y rescates"
                  },
                  {
                    service: "Emergencias Médicas",
                    number: "107",
                    description: "Ambulancias y urgencias médicas"
                  },
                  {
                    service: "Defensa Civil",
                    number: "(02323) 123-456",
                    description: "Emergencias climáticas y desastres"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{contact.service}</h3>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Centro de operaciones de seguridad"
               src="https://images.unsplash.com/photo-1688413399498-e35ed74b554f" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consejos de Seguridad */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consejos de Seguridad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recomendaciones para mantener tu seguridad y la de tu familia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "En el hogar",
                tips: [
                  "Mantén puertas y ventanas cerradas con llave",
                  "Instala sistemas de alarma y iluminación exterior",
                  "No abras la puerta a desconocidos",
                  "Mantén los números de emergencia visibles"
                ]
              },
              {
                title: "En la vía pública",
                tips: [
                  "Camina por lugares bien iluminados",
                  "Evita mostrar objetos de valor",
                  "Mantente alerta a tu entorno",
                  "Utiliza los puntos seguros establecidos"
                ]
              },
              {
                title: "En el transporte",
                tips: [
                  "Espera el transporte en paradas oficiales",
                  "Mantén tus pertenencias seguras",
                  "Evita viajar solo en horarios nocturnos",
                  "Conoce las rutas y horarios"
                ]
              },
              {
                title: "Comunicación",
                tips: [
                  "Informa tu ubicación a familiares",
                  "Mantén tu teléfono cargado",
                  "Conoce los números de emergencia",
                  "Reporta actividades sospechosas"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Tu seguridad es nuestra prioridad</h2>
            <p className="text-xl mb-8">
              Trabajamos juntos para hacer de Capitán Sarmiento una ciudad más segura para todos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600"
                onClick={handleFeatureClick}
              >
                Reportar incidente
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Más información
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadSegura;
