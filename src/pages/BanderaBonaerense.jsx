
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Flag, MapPin, Calendar, Users, Book, ArrowRight } from 'lucide-react';

const BanderaBonaerense = () => {
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
        <title>Historia de la Bandera Bonaerense - Capitán Sarmiento</title>
        <meta name="description" content="Descubre la historia de la Bandera Bonaerense en Capitán Sarmiento, cuna de este símbolo provincial. Visita el Museo de la Bandera Bonaerense." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-white to-blue-600 text-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Flag className="w-16 h-16 mx-auto mb-6 text-blue-800" />
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Cuna de la Bandera Bonaerense
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto">
              Capitán Sarmiento, lugar donde nació el símbolo que representa a todos los bonaerenses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Historia de Nuestra Bandera</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  La Bandera de la Provincia de Buenos Aires nació en nuestra querida ciudad de Capitán Sarmiento, 
                  convirtiéndose en un símbolo de identidad y orgullo para todos los bonaerenses.
                </p>
                <p>
                  Creada en 1935 por iniciativa del entonces intendente municipal, la bandera fue diseñada 
                  con los colores celeste y blanco que representan los valores y la historia de nuestra provincia.
                </p>
                <p>
                  El diseño incorpora elementos simbólicos que reflejan la riqueza cultural, histórica y 
                  geográfica de Buenos Aires, haciendo de Capitán Sarmiento un lugar de especial significado 
                  en la historia provincial.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">1935</div>
                  <div className="text-sm text-gray-600">Año de creación</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">17M+</div>
                  <div className="text-sm text-gray-600">Bonaerenses representados</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Bandera de la Provincia de Buenos Aires ondeando"
               src="https://images.unsplash.com/photo-1638271264387-a8ab34e4991d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simbolismo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simbolismo y Significado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada elemento de nuestra bandera provincial tiene un profundo significado histórico y cultural
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Colores Patrios",
                description: "El celeste y blanco conectan nuestra provincia con los colores de la bandera nacional argentina",
                icon: "🇦🇷"
              },
              {
                title: "Identidad Bonaerense",
                description: "Representa la unidad y el orgullo de todos los habitantes de la Provincia de Buenos Aires",
                icon: "🏛️"
              },
              {
                title: "Tradición Histórica",
                description: "Mantiene viva la memoria histórica y las tradiciones de nuestro pueblo bonaerense",
                icon: "📜"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Museo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Museo de la Bandera Bonaerense en Capitán Sarmiento"
               src="https://images.unsplash.com/photo-1638271264387-a8ab34e4991d" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Museo de la Bandera Bonaerense</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Visita nuestro museo dedicado exclusivamente a la historia y significado de la Bandera Bonaerense, 
                  ubicado en el corazón de Capitán Sarmiento.
                </p>
                <p>
                  El museo alberga una colección única de documentos históricos, fotografías, objetos y testimonios 
                  que narran la fascinante historia de cómo nació este símbolo provincial.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Plaza Principal, Capitán Sarmiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Martes a Domingo: 9:00 - 17:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Visitas guiadas disponibles</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleFeatureClick}
                >
                  Planificar mi visita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleFeatureClick}
                >
                  Información de contacto
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actividades Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Actividades y Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participa en las celebraciones y actividades relacionadas con nuestra bandera provincial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Festival Anual de la Bandera",
                description: "Celebración anual con desfiles, música y actividades culturales en honor a nuestra bandera",
                date: "Octubre de cada año",
                image: "Festival de la bandera con desfile y actividades culturales"
              },
              {
                title: "Visitas Educativas",
                description: "Programas especiales para escuelas y grupos educativos con actividades interactivas",
                date: "Todo el año",
                image: "Estudiantes en visita educativa al museo de la bandera"
              },
              {
                title: "Talleres de Historia",
                description: "Talleres participativos sobre la historia de Buenos Aires y sus símbolos",
                date: "Fines de semana",
                image: "Taller educativo sobre historia bonaerense con participantes"
              },
              {
                title: "Exposiciones Temporales",
                description: "Muestras especiales sobre diferentes aspectos de la cultura bonaerense",
                date: "Rotativas",
                image: "Exposición temporal con objetos históricos bonaerenses"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={handleFeatureClick}
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`Actividad - ${activity.title}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{activity.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <Button variant="outline" size="sm">
                    Más información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanderaBonaerense;
