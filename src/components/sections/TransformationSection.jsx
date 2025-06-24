import { FaUserTie, FaGraduationCap, FaBuilding, FaUsers } from 'react-icons/fa';

const TransformationSection = () => {
    const targetAudience = [
        { type: "Aspiring Entrepreneurs", icon: <FaUserTie /> },
        { type: "Youth from underprivileged backgrounds", icon: <FaGraduationCap /> },
        { type: "Business owners looking to scale", icon: <FaBuilding /> },
        { type: "Community changemakers", icon: <FaUsers /> }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    <span className="inline-block border-b-4 border-primary pb-2">Start Your Transformation Journey</span>
                </h2>

                <p className="text-lg text-center max-w-3xl mx-auto mb-12">
                    Whether you're stuck in a 9-to-5 rut, dreaming of launching your own business,
                    or seeking guidance to scale what you've already built — I'm here to guide you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {targetAudience.map((audience, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <div className="text-primary text-3xl mb-4">
                                {audience.icon}
                            </div>
                            <p className="font-medium">{audience.type}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="#contact"
                        className="btn btn-primary inline-flex items-center"
                    >
                        Schedule a Call
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TransformationSection;