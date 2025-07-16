import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Leaf } from 'lucide-react';
import logo from '@/assets/logos/logo.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono personalizado para el marcador (opcional, para evitar el warning de Leaflet)
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Municipio',
      links: [
        { name: 'Nuestra Ciudad', path: '/municipio/nuestra-ciudad' },
        { name: 'Ciudad Segura', path: '/municipio/ciudad-segura' },
        { name: 'Ciudad Educadora', path: '/municipio/ciudad-educadora' },
        { name: 'Ciudad Viva', path: '/municipio/ciudad-viva' },
        { name: 'Ciudad Verde', path: '/municipio/ciudad-verde' },
        { name: 'Ciudad de Oportunidades', path: '/municipio/ciudad-oportunidades' },
        { name: 'Ciudad Amigable', path: '/municipio/ciudad-amigable' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/municipalidadcapitansarmiento' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/municipio_ctansto/' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/5492478501603?text=Hola%20Municipio%20de%20Capitán%20Sarmiento%2C%20tengo%20una%20consulta%20sobre%3A%20' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <img src={logo} alt="Logo Capitán Sarmiento" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Capitán Sarmiento</h3>
                <p className="text-blue-200 text-sm">Buenos Aires, Argentina</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-blue-100 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Cuna de la bandera bonaerense y capital nacional del turf. 
              Trabajamos por una ciudad más próspera, segura y amigable para todos.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm">
                  Centenario 499, Capitán Sarmiento.<br/>
                  Provincia de Buenos Aires<br/>
                  CP 2764
                </span>
              </div>
            
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-sm">info@capitansarmiento.gob.ar</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Clock className="w-4 h-4 text-blue-300" />
                <span className="text-sm">Lun - Vie: 8:00 - 16:00</span>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-blue-600 pb-2">Ubicación</h4>
            <div className="rounded-xl overflow-hidden shadow-lg border border-blue-900/20 bg-white">
              <MapContainer
                center={[-34.16899, -59.80088]}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-44 md:h-56"
                style={{ minHeight: '176px', minWidth: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.16899, -59.80088]} icon={markerIcon}>
                  <Popup>
                    Capitán Sarmiento, Buenos Aires
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + (sectionIndex * 0.1) }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white border-b border-blue-600 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      to={link.path}
                      className="text-blue-100 hover:text-white transition-colors duration-300 text-sm group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Quick Links */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-blue-600 pb-2">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link to="/" className="text-blue-100 hover:text-white transition-colors duration-300 text-sm group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Inicio</span>
                </Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <Link to="/municipio" className="text-blue-100 hover:text-white transition-colors duration-300 text-sm group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Municipio</span>
                </Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Link to="/servicios" className="text-blue-100 hover:text-white transition-colors duration-300 text-sm group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Servicios</span>
                </Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <Link to="/contacto" className="text-blue-100 hover:text-white transition-colors duration-300 text-sm group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contacto</span>
                </Link>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-blue-200">Síguenos</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:text-blue-100 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-blue-700 bg-blue-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center">
            <p className="text-blue-200 text-sm flex items-center gap-2">
              Desarrollado por{' '}
              <a 
                href="https://katherinemolina.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                Katherine Molina
              </a>
              <Leaf className="w-5 h-5 text-green-400 inline-block" />
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 