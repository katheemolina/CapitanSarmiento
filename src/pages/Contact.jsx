
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      details: ["+54 2323 123456", "+54 2323 654321"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@capitansarmiento.gob.ar", "prensa@capitansarmiento.gob.ar"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      details: ["Plaza Principal s/n", "Capitán Sarmiento, Buenos Aires"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      details: ["Lunes a Viernes: 8:00 - 16:00", "Sábados: 9:00 - 13:00"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const departments = [
    { name: "Intendencia", phone: "+54 2323 123456", email: "intendencia@capitansarmiento.gob.ar" },
    { name: "Secretaría de Gobierno", phone: "+54 2323 123457", email: "gobierno@capitansarmiento.gob.ar" },
    { name: "Obras Públicas", phone: "+54 2323 123458", email: "obras@capitansarmiento.gob.ar" },
    { name: "Desarrollo Social", phone: "+54 2323 123459", email: "social@capitansarmiento.gob.ar" },
    { name: "Salud Pública", phone: "+54 2323 123460", email: "salud@capitansarmiento.gob.ar" },
    { name: "Educación y Cultura", phone: "+54 2323 123461", email: "cultura@capitansarmiento.gob.ar" }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Contacto - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Contacta con el Municipio de Capitán Sarmiento. Información de contacto, horarios de atención y formulario de consultas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o trámite
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos tu consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Consulta general</option>
                    <option>Trámites municipales</option>
                    <option>Servicios públicos</option>
                    <option>Reclamos</option>
                    <option>Sugerencias</option>
                    <option>Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ubicación</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Mapa interactivo de la ubicación municipal</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="text-blue-600 hover:bg-blue-50">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="text-pink-600 hover:bg-pink-50">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="text-blue-400 hover:bg-blue-50">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto por Departamento</h2>
            <p className="text-xl text-gray-600">
              Contacta directamente con el área que necesites
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {dept.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {dept.email}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
