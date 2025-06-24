import { FaMicrophone, FaUniversity, FaBuilding } from 'react-icons/fa';

const SpeakingSection = () => {
  const speakingTopics = [
    { 
      title: "Entrepreneurship Mindset", 
      icon: <FaMicrophone />,
      description: "How to develop the mindset needed for entrepreneurial success"
    },
    { 
      title: "College Motivational Talks", 
      icon: <FaUniversity />,
      description: "Inspiring the next generation to pursue their dreams"
    },
    { 
      title: "Corporate Leadership", 
      icon: <FaBuilding />,
      description: "Building effective teams and fostering innovation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left column - Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="inline-block border-b-4 border-primary pb-2">Motivational Speaking</span>
            </h2>
            
            <p className="text-lg mb-6">
              Book me for your next event or college session. My speaking style combines raw storytelling 
              with bold calls to action.
            </p>
            
            <div className="space-y-4 mb-8">
              {speakingTopics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">{topic.icon}</div>
                  <div>
                    <h3 className="font-bold">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Book Now
            </a>
          </div>
          
          {/* Right column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              {/* Replace with actual image */}
              <div className="bg-gray-300 h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="/speaking-image.jpg" 
                  alt="Kazi Mahasin Azim speaking at an event" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=Speaking+Event";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">100+</p>
                <p className="text-sm">Speaking Engagements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;