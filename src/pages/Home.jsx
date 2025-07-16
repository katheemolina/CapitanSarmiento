
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Palette, 
  GraduationCap, 
  Newspaper,
  ArrowRight,
  Play,
  Flag,
  Trophy
} from 'lucide-react';

const Home = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const newsItems = [
    {
      id: 1,
      title: "Nueva infraestructura deportiva inaugurada",
      date: "15 de Julio, 2025",
      excerpt: "Se inauguró el nuevo complejo deportivo municipal con canchas de fútbol y básquet.",
      image: "Moderno complejo deportivo con canchas de fútbol y básquet"
    },
    {
      id: 2,
      title: "Festival de la Bandera Bonaerense 2025",
      date: "10 de Julio, 2025",
      excerpt: "Gran celebración en honor a nuestra historia y tradición bonaerense.",
      image: "Festival con banderas argentinas y bonaerenses ondeando"
    },
    {
      id: 3,
      title: "Programa de capacitación laboral",
      date: "8 de Julio, 2025",
      excerpt: "Nuevos cursos gratuitos de oficios para jóvenes y adultos de la comunidad.",
      image: "Personas en taller de capacitación laboral"
    },
    {
      id: 4,
      title: "Mejoras en el sistema de salud municipal",
      date: "5 de Julio, 2025",
      excerpt: "Ampliación del centro de salud con nuevos equipos médicos.",
      image: "Centro de salud moderno con equipamiento médico"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Inicio - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Bienvenido al sitio oficial del Municipio de Capitán Sarmiento, cuna de la bandera bonaerense y capital nacional del turf." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Capitán Sarmiento
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Cuna de la Bandera Bonaerense y Capital Nacional del Turf
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/bandera-bonaerense">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Flag className="w-5 h-5 mr-2" />
                  Historia de la Bandera
                </Button>
              </Link>
              
              <Link to="/turf">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  <Trophy className="w-5 h-5 mr-2" />
                  Información sobre Turf
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Turismo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Turismo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los atractivos turísticos de nuestra hermosa ciudad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Lugares Históricos",
                description: "Visita el Museo de la Bandera Bonaerense y otros sitios emblemáticos",
                image: "Museo histórico con arquitectura colonial argentina"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Hipódromo",
                description: "Capital nacional del turf, con carreras de caballos de primer nivel",
                image: "Hipódromo con caballos de carrera y jinetes"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Patrimonio Cultural",
                description: "Rica historia y tradiciones que nos identifican como bonaerenses",
                image: "Plaza principal con monumentos históricos argentinos"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer"
                onClick={() => handleFeatureClick('turismo')}
              >
                <img  
                  className="w-full h-48 object-cover rounded-lg mb-6" 
                  alt={`Turismo - ${item.title}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Cultura</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra identidad cultural y tradiciones que nos enorgullecen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg" 
                alt="Cultura de Capitán Sarmiento"
               src="https://images.unsplash.com/photo-1671552998949-b14b50bb82d9" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flag className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cuna de la Bandera Bonaerense</h3>
                  <p className="text-gray-600">Orgullosos de ser el lugar donde nació nuestra querida bandera provincial.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tradiciones Locales</h3>
                  <p className="text-gray-600">Festivales y celebraciones que mantienen viva nuestra cultura bonaerense.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Arte y Expresión</h3>
                  <p className="text-gray-600">Espacios culturales que promueven el arte local y regional.</p>
                </div>
              </div>

              <Button 
                className="mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => handleFeatureClick('cultura')}
              >
                Conocer más sobre nuestra cultura
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talleres Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Talleres y Capacitación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Programas educativos y talleres para el desarrollo de nuestra comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Capacitación Laboral",
                description: "Cursos de oficios y habilidades técnicas para jóvenes y adultos",
                image: "Taller de capacitación con personas aprendiendo oficios"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Arte y Cultura",
                description: "Talleres de pintura, música y expresión artística para todas las edades",
                image: "Taller de arte con personas pintando y creando"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Desarrollo Comunitario",
                description: "Programas de liderazgo y participación ciudadana",
                image: "Reunión comunitaria con vecinos participando activamente"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer"
                onClick={() => handleFeatureClick('talleres')}
              >
                <img  
                  className="w-full h-48 object-cover rounded-lg mb-6" 
                  alt={`Talleres - ${item.title}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" className="w-full">
                  Más información
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Últimas Noticias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre las novedades de nuestro municipio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => handleFeatureClick('noticias')}
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`Noticia - ${news.title}`}
                 src="https://images.unsplash.com/photo-1690120225080-e48e3aea49de" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/noticias">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Newspaper className="w-5 h-5 mr-2" />
                Ver todas las noticias
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
