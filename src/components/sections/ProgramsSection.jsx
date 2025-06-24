import React from 'react';
import { FaUserTie, FaUsers, FaPeopleCarry } from 'react-icons/fa';

const ProgramsSection = () => {
    const programs = [
        {
            title: "Private 1:1 Business Coaching",
            icon: <FaUserTie className="text-4xl mb-4 text-primary" />,
            features: [
                "Weekly guidance & accountability",
                "Start from scratch",
                "Fix growth issues",
                "Build scalable systems & impact"
            ]
        },
        {
            title: "Youth Entrepreneurship Bootcamp",
            icon: <FaUsers className="text-4xl mb-4 text-primary" />,
            features: [
                "2-day high-energy workshop",
                "Build business skills",
                "Design first revenue model"
            ]
        },
        {
            title: "Core Team Strategy Workshops",
            icon: <FaPeopleCarry className="text-4xl mb-4 text-primary" />,
            features: [
                "Vision alignment",
                "Team communication",
                "Strategic goal planning"
            ]
        }
    ];

    return (
        <section id="programs" className="py-16 bg-white">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    <span className="inline-block border-b-4 border-primary pb-2">Coaching Programs</span>
                </h2>

                <p className="text-lg text-center max-w-3xl mx-auto mb-12">
                    Tailored guidance to help you build, grow, and scale your business ventures
                    with proven strategies and personalized support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-8 text-center flex flex-col h-full hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-center mb-2">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                            <ul className="mb-8 text-left flex-grow">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2 flex items-start">
                                        <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href="#contact"
                                    className="btn btn-primary w-full"
                                >
                                    Schedule a Call
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;