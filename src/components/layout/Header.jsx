import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', path: '#' },
        { name: 'About', path: '#about' },
        { name: 'Programs', path: '#programs' },
        { name: 'Book', path: '#book' },
        { name: 'Vision', path: '#vision' },
        { name: 'Contact', path: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="#" className="text-2xl font-bold">
                    <span className={isScrolled ? 'text-primary' : 'text-white'}>Kazi Mahasin Azim</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.path}
                                    className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FaTimes className={isScrolled ? 'text-gray-800' : 'text-white'} />
                    ) : (
                        <FaBars className={isScrolled ? 'text-gray-800' : 'text-white'} />
                    )}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
                        <ul className="flex flex-col space-y-4 px-6">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className="block font-medium text-gray-800 hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;