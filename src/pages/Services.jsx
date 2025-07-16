
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Heart, 
  Wrench, 
  GraduationCap, 
  Shield, 
  Users,
  Phone,
  Clock,
  MapPin
} from 'lucide-react';

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Trámites Municipales",
      description: "Gestión de documentos, permisos y certificaciones",
      items: ["Certificados de nacimiento", "Permisos de construcción", "Licencias comerciales", "Habilitaciones"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Salud Pública",
      description: "Servicios de salud y bienestar para la comunidad",
      items: ["Centro de salud municipal", "Vacunación", "Programas preventivos", "Atención primaria"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Servicios Públicos",
      description: "Mantenimiento y mejora de la infraestructura urbana",
      items: ["Alumbrado público", "Recolección de residuos", "Mantenimiento de calles", "Espacios verdes"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educación y Cultura",
      description: "Programas educativos y actividades culturales",
      items: ["Biblioteca municipal", "Talleres culturales", "Programas educativos", "Eventos culturales"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad Ciudadana",
      description: "Protección y seguridad para todos los vecinos",
      items: ["Patrullaje urbano", "Cámaras de seguridad", "Emergencias", "Prevención del delito"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Desarrollo Social",
      description: "Programas de asistencia y desarrollo comunitario",
      items: ["Asistencia social", "Programas para adultos mayores", "Apoyo a familias", "Inclusión social"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Servicios - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Conoce todos los servicios que ofrece el Municipio de Capitán Sarmiento: trámites, salud, servicios públicos, educación y más." />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Servicios Municipales</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Estamos aquí para servirte. Conoce todos los servicios que ponemos a disposición de nuestra comunidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    onClick={handleServiceClick}
                  >
                    Más información
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
            <p className="text-xl text-gray-600">
              Para consultas sobre nuestros servicios, no dudes en contactarnos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-lg"
            >
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600">+54 2323 123456</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-green-50 rounded-lg"
            >
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Horarios</h3>
              <p className="text-gray-600">Lun - Vie: 8:00 - 16:00</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-purple-50 rounded-lg"
            >
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-600">Plaza Principal, Capitán Sarmiento</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
