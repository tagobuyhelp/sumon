import { FaBook, FaCheckCircle } from 'react-icons/fa';

const BookSection = () => {
    const bookHighlights = [
        "Step-by-step startup strategies",
        "Stories from my own students",
        "Lessons from failures, travels, and experience",
        "Practical business models for beginners",
        "Financial planning for entrepreneurs",
        "Marketing strategies for small businesses"
    ];

    return (
        <section id="book" className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left column - Book Image */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="bg-white p-4 shadow-xl rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                {/* Replace with actual book cover image */}
                                <div className="bg-gray-300 h-[500px] rounded-lg overflow-hidden">
                                    <img
                                        src="/book-cover.jpg"
                                        alt="How to Become a Successful Businessman - Book by Kazi Mahasin Azim"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/400x600?text=Book+Cover";
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                                <FaBook className="text-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right column - Book Details */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="inline-block border-b-4 border-primary pb-2">Learn from My Book</span>
                        </h2>

                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                            How to Become a Successful Businessman
                        </h3>

                        <p className="text-lg mb-6">
                            A comprehensive guide for aspiring entrepreneurs, packed with practical advice,
                            real-world examples, and actionable strategies to help you start and grow your business.
                        </p>

                        <h4 className="text-xl font-bold mb-3">Inside you'll find:</h4>
                        <ul className="space-y-3 mb-8">
                            {bookHighlights.map((highlight, index) => (
                                <li key={index} className="flex items-start">
                                    <FaCheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get the Book
                            </a>
                            <a
                                href="#"
                                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Sample Chapter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSection;