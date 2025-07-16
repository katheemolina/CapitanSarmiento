
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const { toast } = useToast();

  const handleNewsClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const featuredNews = {
    id: 1,
    title: "Gran inauguración del nuevo complejo deportivo municipal",
    excerpt: "El intendente junto a autoridades provinciales inauguraron las nuevas instalaciones deportivas que beneficiarán a toda la comunidad de Capitán Sarmiento.",
    content: "En una ceremonia que contó con la presencia de cientos de vecinos, se inauguró oficialmente el nuevo complejo deportivo municipal...",
    date: "15 de Julio, 2025",
    author: "Prensa Municipal",
    category: "Deportes",
    image: "Inauguración de complejo deportivo con autoridades y vecinos"
  };

  const newsItems = [
    {
      id: 2,
      title: "Festival de la Bandera Bonaerense 2025",
      excerpt: "Gran celebración en honor a nuestra historia y tradición bonaerense con actividades para toda la familia.",
      date: "10 de Julio, 2025",
      author: "Cultura Municipal",
      category: "Cultura",
      image: "Festival con banderas argentinas y bonaerenses ondeando"
    },
    {
      id: 3,
      title: "Nuevo programa de capacitación laboral",
      excerpt: "Se lanzó un programa integral de capacitación en oficios para jóvenes y adultos de la comunidad.",
      date: "8 de Julio, 2025",
      author: "Desarrollo Social",
      category: "Educación",
      image: "Personas en taller de capacitación laboral"
    },
    {
      id: 4,
      title: "Mejoras en el sistema de salud municipal",
      excerpt: "Ampliación del centro de salud con nuevos equipos médicos y mayor capacidad de atención.",
      date: "5 de Julio, 2025",
      author: "Salud Pública",
      category: "Salud",
      image: "Centro de salud moderno con equipamiento médico"
    },
    {
      id: 5,
      title: "Plan de forestación urbana en marcha",
      excerpt: "Iniciativa municipal para plantar 500 árboles en diferentes barrios de la ciudad.",
      date: "3 de Julio, 2025",
      author: "Medio Ambiente",
      category: "Ambiente",
      image: "Plantación de árboles en espacios urbanos"
    },
    {
      id: 6,
      title: "Renovación de la plaza central",
      excerpt: "Trabajos de embellecimiento y mejora de la infraestructura en nuestra plaza principal.",
      date: "1 de Julio, 2025",
      author: "Obras Públicas",
      category: "Infraestructura",
      image: "Plaza renovada con nuevos bancos y jardines"
    },
    {
      id: 7,
      title: "Programa de apoyo a emprendedores locales",
      excerpt: "Nueva iniciativa para fomentar el desarrollo de pequeños negocios en la comunidad.",
      date: "28 de Junio, 2025",
      author: "Desarrollo Económico",
      category: "Economía",
      image: "Emprendedores locales en reunión de capacitación"
    },
    {
      id: 8,
      title: "Campaña de concientización vial",
      excerpt: "Actividades educativas sobre seguridad vial dirigidas a estudiantes y conductores.",
      date: "25 de Junio, 2025",
      author: "Seguridad Vial",
      category: "Seguridad",
      image: "Campaña educativa sobre seguridad vial en escuelas"
    },
    {
      id: 9,
      title: "Nuevo sistema de recolección de residuos",
      excerpt: "Implementación de un sistema más eficiente y sustentable para la gestión de residuos.",
      date: "22 de Junio, 2025",
      author: "Servicios Públicos",
      category: "Ambiente",
      image: "Camión de recolección de residuos moderno y ecológico"
    }
  ];

  const categories = ["Todas", "Cultura", "Deportes", "Educación", "Salud", "Ambiente", "Infraestructura", "Economía", "Seguridad"];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Noticias - Municipio de Capitán Sarmiento</title>
        <meta name="description" content="Mantente informado con las últimas noticias del Municipio de Capitán Sarmiento. Novedades, eventos y anuncios oficiales." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Noticias</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Mantente informado sobre las novedades y acontecimientos de nuestro municipio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destacada
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {featuredNews.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{featuredNews.excerpt}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredNews.author}
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleNewsClick}
                >
                  Leer noticia completa
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="lg:p-8">
                <img  
                  className="w-full h-full object-cover rounded-lg" 
                  alt={`Noticia destacada - ${featuredNews.title}`}
                 src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2"
                onClick={handleNewsClick}
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={handleNewsClick}
              >
                <img  
                  className="w-full h-48 object-cover" 
                  alt={`Noticia - ${news.title}`}
                 src="https://images.unsplash.com/photo-1690120225080-e48e3aea49de" />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {news.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="w-3 h-3 mr-1" />
                      {news.author}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Leer más
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleNewsClick}
          >
            Cargar más noticias
          </Button>
        </div>
      </section>
    </div>
  );
};

export default News;
