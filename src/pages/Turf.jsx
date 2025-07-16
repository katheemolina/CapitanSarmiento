
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';

const Turf = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const races = [
    {
      name: "Gran Premio Capitán Sarmiento",
      date: "15 de Agosto, 2025",
      prize: "$500,000",
      category: "Grupo I"
    },
    {
      name: "Clásico de la Bandera",
      date: "22 de Agosto, 2025",
      prize: "$300,000",
      category: "Grupo II"
    },
    {
      name: "Derby Bonaerense",
      date: "29 de Agosto, 2025",
      prize: "$400,000",
      category: "Grupo I"
    }
  ];

  const facilities = [
    {
      title: "Pista Principal",
      description: "Pista de césped de 2.000 metros con tecnología de última generación",
      icon: "🏇"
    },
    {
      title: "Tribunas VIP",
      description: "Espacios exclusivos con vista privilegiada y servicios premium",
      icon: "🏆"
    },
    {
      title: "Paddock",
      description: "Área de preparación de caballos con instalaciones modernas",
      icon: "🐎"
    },
    {
      title: "Centro de Entrenamiento",
      description: "Facilidades completas para el entrenamiento de caballos de carrera",
      icon: "💪"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Capital Nacional del Turf - Capitán Sarmiento</title>
        <meta name="description" content="Descubre por qué Capitán Sarmiento es la Capital Nacional del Turf. Historia, hipódromo, carreras y tradición hípica argentina." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Capital Nacional del Turf
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Capitán Sarmiento, donde la tradición hípica argentina alcanza su máxima expresión
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia del Turf */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tradición Hípica Centenaria</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Capitán Sarmiento se ha consolidado como la Capital Nacional del Turf gracias a su rica 
                  tradición en carreras de caballos que se remonta a principios del siglo XX.
                </p>
                <p>
                  Nuestro hipódromo ha sido testigo de las carreras más importantes del país, atrayendo 
                  a los mejores jinetes, entrenadores y ejemplares de toda Argentina y el mundo.
                </p>
                <p>
                  La pasión por el turf forma parte del ADN de nuestra ciudad, donde generaciones enteras 
                  han crecido admirando la elegancia y velocidad de estos magníficos animales.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">1920</div>
                  <div className="text-sm text-gray-600">Fundación del hipódromo</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">100+</div>
                  <div className="text-sm text-gray-600">Carreras anuales</div>
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
                alt="Carrera de caballos en el hipódromo de Capitán Sarmiento"
               src="https://images.unsplash.com/flagged/photo-1569319388901-605a6d2d1299" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hipódromo */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hipódromo de Capitán Sarmiento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instalaciones de primer nivel que han convertido a nuestro hipódromo en referencia nacional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <img  
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-8" 
              alt="Vista panorámica del hipódromo de Capitán Sarmiento"
             src="https://images.unsplash.com/photo-1569001821549-337ef3683f77" />
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleFeatureClick}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visitar el hipódromo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Próximas Carreras */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Próximas Carreras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No te pierdas las carreras más importantes de la temporada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {races.map((race, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 border-l-4 border-green-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {race.category}
                  </span>
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{race.name}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {race.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    Premio: {race.prize}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  onClick={handleFeatureClick}
                >
                  Más información
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Práctica */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información para Visitantes</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horarios de Carreras</h3>
                    <p className="text-gray-600">Sábados y domingos desde las 14:00 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                    <p className="text-gray-600">Av. del Hipódromo 1234, Capitán Sarmiento</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Capacidad</h3>
                    <p className="text-gray-600">15,000 espectadores en tribunas y palcos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Servicios</h3>
                    <p className="text-gray-600">Restaurante, bar, estacionamiento y tienda de souvenirs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleFeatureClick}
                >
                  Comprar entradas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleFeatureClick}
                >
                  Programa de carreras
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-8" 
                alt="Jinetes preparándose para una carrera"
               src="https://images.unsplash.com/photo-1620604045106-573ec9d3e963" />
              
              <div className="bg-green-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">¿Sabías que...?</h3>
                <ul className="space-y-2 text-green-100">
                  <li>• El récord de la pista es de 1:58.3 para 2000 metros</li>
                  <li>• Más de 200 caballos entrenan regularmente aquí</li>
                  <li>• El hipódromo genera más de 500 empleos directos</li>
                  <li>• Recibimos visitantes de toda Sudamérica</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turf;
