import { useState } from 'react';
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone
} from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

        // Simulate form submission
        try {
            // Replace with actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1500));
            setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            console.error("Form submission error:", err);
            setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true });
        }
    };

    const socialLinks = [
        { icon: <FaInstagram size={24} />, url: "#", label: "Instagram" },
        { icon: <FaFacebook size={24} />, url: "#", label: "Facebook" },
        { icon: <FaYoutube size={24} />, url: "#", label: "YouTube" },
        { icon: <FaLinkedin size={24} />, url: "#", label: "LinkedIn" }
    ];

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-primary" />,
            title: "Location",
            details: "Kolkata | Delhi | Bengaluru | Online (PAN India)"
        },
        {
            icon: <FaEnvelope className="text-primary" />,
            title: "Email",
            details: "your@email.com"
        },
        {
            icon: <FaPhone className="text-primary" />,
            title: "Phone",
            details: "+91 8017776957"
        }
    ];

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    <span className="inline-block border-b-4 border-primary pb-2">Let's Work Together</span>
                </h2>

                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <p className="text-lg">
                        Ready to transform your business or start your entrepreneurial journey?
                        Get in touch to discuss how we can work together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Contact Info */}
                    <div className="lg:col-span-1 bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-3 mt-1">{info.icon}</div>
                                    <div>
                                        <h4 className="font-bold">{info.title}</h4>
                                        <p className="text-gray-600">{info.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-gray-600 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-2">Available Services</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                                <li>• Weekly 1:1 Coaching</li>
                                <li>• Group Bootcamps</li>
                                <li>• Keynote Speaking</li>
                                <li>• Team Workshops</li>
                                <li>• Business Launch Guidance</li>
                                <li>• Life & Purpose Coaching</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right column - Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus.isSubmitting}
                                className="btn btn-primary w-full"
                            >
                                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {formStatus.isSubmitted && (
                                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}

                            {formStatus.isError && (
                                <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <blockquote className="text-xl md:text-2xl italic mb-4 text-gray-700">
                        "I left college not to quit, but to find a different way to rise. Every young person deserves that chance. I'm here to show them how."
                    </blockquote>
                    <p className="text-gray-500">- Final Words from Sumon</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;