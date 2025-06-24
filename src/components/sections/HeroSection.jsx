import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
            <div className="container-custom py-20 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Kazi Mahasin Azim
                        <span className="text-2xl md:text-3xl font-normal block mt-2">(Sumon)</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-accent mb-6">Rise Beyond Limits</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["ENTREPRENEUR", "BUSINESS COACH", "MOTIVATIONAL SPEAKER", "SOCIAL REFORMER"].map((role, index) => (
                            <span
                                key={index}
                                className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">
                        Transforming lives through entrepreneurship education, business coaching, and social reform.
                        From a small village in Murshidabad to creating opportunities for thousands.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="#contact" className="btn bg-accent hover:bg-yellow-500 text-blue-900 font-bold">
                            Schedule a Call
                        </Link>
                        <Link to="#about" className="btn bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center">
                            Learn My Story <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;