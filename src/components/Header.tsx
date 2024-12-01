import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            RK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admin"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold 
                       hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Admin
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/komenr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://ke.linkedin.com/in/reuben-komen" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:komenr01@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
            <div className="flex justify-center space-x-6 py-4 border-t border-gray-700">
              <a href="https://github.com/komenr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://ke.linkedin.com/in/reuben-komen" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:komenr01@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;