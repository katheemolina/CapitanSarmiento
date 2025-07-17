
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import ciudadSeguraIcon from '@/assets/icons/ciudad-segura-icon.svg';
import camarasImg from '@/assets/images/ciudadsegura/camaras.jpg';
import policiaImg from '@/assets/images/ciudadsegura/policia.jpg';
import bomberosImg from '@/assets/images/ciudadsegura/bomberos.jpg';
import ciudadSeguraImg from '@/assets/images/ciudadsegura/ciudad-segura.jpg';
import { Shield, Camera, Phone, Users, AlertTriangle, MapPin, Car, Bike, Eye, Building, Heart, Truck, Smartphone, Target } from 'lucide-react';

const CiudadSegura = () => {
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
        <title>Ciudad Segura - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce las políticas y programas de seguridad del Municipio de Capitán Sarmiento para garantizar la protección de todos los ciudadanos." />
      </Helmet>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border-b border-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 py-20 md:py-32">
          {/* Icono y texto a la izquierda */}
          <motion.div 
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <img src={ciudadSeguraIcon} alt="Ciudad Segura" className="w-20 h-20 mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Ciudad Segura</h1>
            <p className="text-lg md:text-xl text-blue-800 mb-6 max-w-2xl mx-auto md:mx-0">
              Que los vecinos de Capitán Sarmiento vivan en una ciudad segura es uno de los ejes fundamentales de la gestión
            </p>
          </motion.div>
          {/* Imagen a la derecha */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={ciudadSeguraImg} 
              alt="Ciudad Segura - patrullero y monitoreo" 
              className="w-full max-w-lg h-72 md:h-96 object-cover object-center rounded-xl shadow-lg border border-blue-100 bg-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* Convenio A.C.T.I.V.V.A.S */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Convenio A.C.T.I.V.V.A.S</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Hemos firmado un convenio de colaboración con la <strong>Asociación Civil Trabajar contra la Inseguridad Vial y la Violencia con Acciones Sustentables (A.C.T.I.V.V.A.S)</strong>, con el objetivo de realizar acciones conjuntas que reduzcan la inseguridad vial, motivar la toma de conciencia ciudadana y promover el respeto, prudencia y cuidado por el otro.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8"
            >
              <Target className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Objetivos del Convenio</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reducir la inseguridad vial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Motivar la toma de conciencia ciudadana</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Promover el respeto, prudencia y cuidado por el otro</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patrullaje y Seguridad */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patrullaje y Seguridad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con un sistema integral de patrullaje que garantiza la seguridad en toda la ciudad
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Car className="w-8 h-8" />,
                    title: "7 Móviles Patrulleros",
                    description: "Recorren permanentemente las calles de la ciudad para garantizar la seguridad de todos los vecinos.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Bike className="w-8 h-8" />,
                    title: "2 Motocicletas",
                    description: "Patrullaje ágil y efectivo en zonas específicas de la ciudad.",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Zona Comercial y Bancaria",
                    description: "Móvil afectado específicamente para garantizar la tranquilidad de los vecinos que realizan sus trámites.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Binomios a Pie",
                    description: "Presencia policial en zona bancaria y céntrica para mayor seguridad.",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Cobertura Completa",
                    description: "Seguridad en todos los barrios y puntos estratégicos de la ciudad.",
                    color: "from-red-500 to-red-600"
                  },
                  {
                    icon: <Eye className="w-8 h-8" />,
                    title: "Monitoreo 24/7",
                    description: "Centro de operaciones activo las 24 horas para responder a cualquier emergencia.",
                    color: "from-indigo-500 to-indigo-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={handleFeatureClick}
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* Sistema de Cámaras y App */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sistema de Videovigilancia y App Sarmiento Seguro</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Contamos con <strong>66 cámaras de seguridad</strong>, colocadas en la ciudad y La Luisa en puntos estratégicos y en los accesos a la ciudad, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.
                </p>
                <p>
                  También tenemos la aplicación <strong>Sarmiento Seguro</strong>, que con tan solo tocar un botón en el celular, se emite una alerta al centro de Monitoreo (Ej. Ojos en alerta, policía, bomberos, salud, accidente vial, violencia de género).
                </p>
                <p>
                  A través de la geolocalización del celular, se detecta la ubicación donde está ocurriendo el episodio, y se puede dar una respuesta inmediata.
                </p>
              </div>
            </motion.div>

            {/* Reemplazo los dos divs de cámaras y app por la imagen de cámaras */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={camarasImg}
                alt="Sistema de videovigilancia de Capitán Sarmiento"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lectores de Patentes */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Target className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sistema de Lectores de Patentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contamos con 6 conectores de patentes ubicados estratégicamente para formar un anillado de seguridad a la ciudad, el cual da aviso inmediato al centro de monitoreo en caso de detectar vehículos con pedido de captura o asociados con actividad delictiva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bomberos Voluntarios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bomberos Voluntarios</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Nuestros <strong>Bomberos Voluntarios</strong> son una institución fundamental para la seguridad de Capitán Sarmiento, contando con <strong>50 bomberos activos</strong> y <strong>25 en reserva</strong>.
                </p>
                <p>
                  Disponen de un equipamiento completo que incluye <strong>4 autobombas</strong>, <strong>2 móviles forestales</strong>, <strong>1 cisterna pesado</strong>, <strong>1 de rescate</strong> y <strong>2 unidades adicionales</strong> para responder a cualquier tipo de emergencia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={bomberosImg}
                alt="Bomberos Voluntarios de Capitán Sarmiento"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instituciones Especializadas */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Instituciones Especializadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contamos con instituciones especializadas para diferentes tipos de emergencias y situaciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Comisaría de la Mujer y la Familia",
                description: "Brinda asistencia y orientación en casos de violencia familiar, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Coordinación de Mujer, Género y Diversidad",
                description: "Línea 2478-1544845, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Truck className="w-8 h-8" />, // Comando Rural
                title: "Comando de Prevención Rural",
                description: "18 efectivos, 4 camionetas 4x4, 2 motos y un móvil en La Luisa recorren y cuidan toda la jurisdicción rural del partido y el acceso a la ciudad.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Servicio Local de Protección",
                description: "Funciona en Mármol 145, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Centro de Monitoreo",
                description: "Personal municipal supervisando las 66 cámaras y coordinando todas las emergencias, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Sistema de Alertas",
                description: "Lectores de patentes, cámaras y app móvil trabajando en conjunto, siendo supervisadas en el Centro de Monitoreo por personal de la Municipalidad.",
                color: "from-orange-500 to-orange-600"
              }
            ].map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${institution.color} text-white mb-4`}>
                  {institution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{institution.title}</h3>
                <p className="text-gray-600">{institution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contactos de Emergencia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactos de Emergencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantén estos números siempre a mano para cualquier situación de emergencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                service: "Policía Local",
                number: "101",
                description: "Emergencias policiales y seguridad",
                isPhone: true
              },
              {
                service: "Bomberos Voluntarios",
                number: "100",
                description: "Incendios y rescates",
                isPhone: true
              },
              {
                service: "Emergencias Médicas",
                number: "107",
                description: "Ambulancias y urgencias médicas",
                isPhone: true
              },
              {
                service: "Coordinación de Mujer y Género",
                number: "2478-15-448045",
                description: "Línea 24 horas para violencia de género",
                isPhone: true
              },
              {
                service: "Protección de Niños",
                number: "2478-15-441329",
                description: "Servicio Local de promoción y protección",
                isPhone: true
              },
              {
                service: "App Sarmiento Seguro",
                number: "Descarga la App",
                description: "Alerta con un toque desde tu celular",
                isPhone: false
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{contact.service}</h3>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                  </div>
                </div>
                <div className="mt-4 text-2xl font-bold text-red-600">
                  {contact.isPhone ? (
                    <a 
                      href={`tel:${contact.number}`}
                      className="hover:text-red-700 transition-colors cursor-pointer"
                    >
                      {contact.number}
                    </a>
                  ) : (
                    contact.number
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CiudadSegura;
