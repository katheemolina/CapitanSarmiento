
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Heart, Music, Palette, Trophy, Calendar, Users } from 'lucide-react';

const CiudadViva = () => {
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
        <title>Ciudad Viva - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Descubre las actividades culturales, deportivas y recreativas que dan vida a Capitán Sarmiento." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-pink-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ciudad Viva</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Actividades culturales, deportivas y recreativas que dan vida a nuestra ciudad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Actividades Culturales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Actividades Culturales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Espacios y eventos que enriquecen la vida cultural de nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="w-8 h-8" />,
                title: "Festival de Música",
                description: "Evento anual que reúne artistas locales y regionales",
                color: "from-blue-500 to-blue-600",
                image: "Festival de música con artistas locales en el escenario"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Talleres de Arte",
                description: "Espacios creativos para todas las edades y niveles",
                color: "from-purple-500 to-purple-600",
                image: "Taller de arte con personas pintando y creando"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Teatro Comunitario",
                description: "Grupo de teatro local con obras durante todo el año",
                color: "from-red-500 to-red-600",
                image: "Obra de teatro comunitario con actores locales"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Feria de Artesanos",
                description: "Muestra mensual de productos artesanales locales",
                color: "from-green-500 to-green-600",
                image: "Feria de artesanos con productos locales y visitantes"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Noches Culturales",
                description: "Eventos semanales con música, danza y poesía",
                color: "from-pink-500 to-pink-600",
                image: "Noche cultural con música y danza en plaza pública"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Exposiciones",
                description: "Muestras de arte local en el centro cultural",
                color: "from-indigo-500 to-indigo-600",
                image: "Exposición de arte local en galería municipal"
              }
            ].map((activity, index) => (
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
                  alt={`${activity.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${activity.color} text-white mb-4`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deportes y Recreación */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Deportes y Recreación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instalaciones y programas deportivos para mantener activa a nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Complejo Deportivo Municipal",
                description: "Instalaciones modernas para múltiples disciplinas deportivas",
                facilities: ["Canchas de fútbol", "Cancha de básquet", "Pista de atletismo", "Gimnasio cubierto"],
                image: "Complejo deportivo municipal con canchas y gimnasio"
              },
              {
                title: "Programas Deportivos",
                description: "Actividades organizadas para diferentes grupos etarios",
                facilities: ["Escuelas deportivas", "Torneos inter-barriales", "Actividades para adultos mayores", "Deportes adaptados"],
                image: "Programas deportivos con niños y adultos en actividades"
              },
              {
                title: "Espacios Recreativos",
                description: "Áreas verdes y de esparcimiento para toda la familia",
                facilities: ["Parques públicos", "Plazas temáticas", "Circuitos aeróbicos", "Juegos infantiles"],
                image: "Espacios recreativos con familias disfrutando en parques"
              },
              {
                title: "Eventos Deportivos",
                description: "Competencias y encuentros deportivos regulares",
                facilities: ["Maratón anual", "Torneos de fútbol", "Competencias de natación", "Encuentros regionales"],
                image: "Eventos deportivos con competencias y participantes"
              }
            ].map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`${sport.title} en Capitán Sarmiento`}
                 src="https://images.unsplash.com/photo-1555617289-f8a4e290891a" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sport.title}</h3>
                  <p className="text-gray-600 mb-4">{sport.description}</p>
                  <ul className="space-y-2">
                    {sport.facilities.map((facility, facilityIndex) => (
                      <li key={facilityIndex} className="flex items-center text-sm text-gray-700">
                        <Trophy className="w-4 h-4 text-red-500 mr-3" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Próximos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No te pierdas las actividades que tenemos preparadas para ti
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Festival de la Bandera",
                date: "15 de Agosto",
                time: "18:00 hs",
                location: "Plaza Principal",
                type: "Cultural",
                description: "Celebración anual con música, danza y actividades familiares"
              },
              {
                title: "Torneo de Fútbol Infantil",
                date: "22 de Agosto",
                time: "14:00 hs",
                location: "Complejo Deportivo",
                type: "Deportivo",
                description: "Competencia para niños de 6 a 12 años de todos los barrios"
              },
              {
                title: "Noche de Tango",
                date: "29 de Agosto",
                time: "20:00 hs",
                location: "Centro Cultural",
                type: "Cultural",
                description: "Espectáculo de tango con artistas locales y milonga"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-6 border-l-4 border-red-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Cultural' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                  <Calendar className="w-5 h-5 text-red-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-red-500" />
                    {event.date} - {event.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-red-500" />
                    {event.location}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={handleFeatureClick}
                >
                  Más información
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participación Ciudadana */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Participación Ciudadana</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Creemos que una ciudad viva se construye con la participación activa de todos 
                  sus habitantes. Te invitamos a ser parte de nuestras actividades y proponer 
                  nuevas iniciativas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Comités Barriales</h4>
                      <p className="text-sm text-gray-600">Organización de actividades por barrio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Voluntariado Cultural</h4>
                      <p className="text-sm text-gray-600">Colabora en la organización de eventos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Propuestas Ciudadanas</h4>
                      <p className="text-sm text-gray-600">Presenta tus ideas para nuevas actividades</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-red-600 hover:bg-red-700"
                onClick={handleFeatureClick}
              >
                Participar ahora
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Participación ciudadana en actividades comunitarias"
               src="https://images.unsplash.com/photo-1694708538699-d417f22dc2ff" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">¡Vive tu ciudad al máximo!</h2>
            <p className="text-xl mb-8">
              Únete a nuestras actividades y forma parte de una comunidad vibrante y activa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600"
                onClick={handleFeatureClick}
              >
                Ver calendario de eventos
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100"
                onClick={handleFeatureClick}
              >
                Inscribirse a actividades
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CiudadViva;
