
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logos/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [municipioOpen, setMunicipioOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { 
      name: 'Municipio', 
      path: '/municipio',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Nuestra Ciudad', path: '/municipio/nuestra-ciudad' },
        { name: 'Ciudad Segura', path: '/municipio/ciudad-segura' },
        { name: 'Ciudad Educadora', path: '/municipio/ciudad-educadora' },
        { name: 'Ciudad Viva', path: '/municipio/ciudad-viva' },
        { name: 'Ciudad Verde y Saludable', path: '/municipio/ciudad-verde' },
        { name: 'Ciudad de Oportunidades', path: '/municipio/ciudad-oportunidades' },
        { name: 'Ciudad Amigable', path: '/municipio/ciudad-amigable' },
      ]
    },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group-hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="Logo Capitán Sarmiento" className="w-full h-full object-cover" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text group-hover:text-blue-600 transition-colors duration-300">Capitán Sarmiento</span>
              <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Buenos Aires, Argentina</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setMunicipioOpen(true)}
                    onMouseLeave={() => setMunicipioOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                        location.pathname.startsWith('/municipio')
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${municipioOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    {municipioOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 backdrop-blur-sm"
                      >
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group/item"
                            >
                              <span className="relative">
                                {dropdownItem.name}
                                <motion.div
                                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover/item:w-full transition-all duration-300"
                                  initial={false}
                                />
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group/item ${
                      location.pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover/item:w-full transition-all duration-300"
                      initial={false}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith('/municipio'))
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem, subIndex) => (
                        <motion.div
                          key={dropdownItem.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                        >
                          <Link
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
