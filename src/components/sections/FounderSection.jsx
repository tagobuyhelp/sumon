import { FaBuilding } from 'react-icons/fa';

const FounderSection = () => {
    const ventures = [
        { name: "EME Academy", description: "Training institute bridging India's skill gap" },
        { name: "Hospice Properties Pvt. Ltd.", description: "Real estate development company" },
        { name: "Yellow Tea", description: "Innovative beverage brand" }
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="inline-block border-b-4 border-primary pb-2">Founder Of</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ventures.map((venture, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                                <FaBuilding className="text-primary text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3">{venture.name}</h3>
                            <p className="text-gray-600 text-center">{venture.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderSection;