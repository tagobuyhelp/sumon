import { FaUsers, FaIndustry, FaGraduationCap, FaHome } from 'react-icons/fa';

const VisionSection = () => {
  const visionPoints = [
    { 
      text: "Train 50,000+ rural entrepreneurs", 
      icon: <FaUsers className="text-3xl text-primary" />,
      description: "Empower individuals from rural areas with entrepreneurial skills"
    },
    { 
      text: "Build industries in underdeveloped districts", 
      icon: <FaIndustry className="text-3xl text-primary" />,
      description: "Create economic opportunities in areas that need them most"
    },
    { 
      text: "Offer free training for financially struggling students", 
      icon: <FaGraduationCap className="text-3xl text-primary" />,
      description: "Ensure education is accessible regardless of financial background"
    },
    { 
      text: "Create an India where no one needs to leave their village", 
      icon: <FaHome className="text-3xl text-primary" />,
      description: "Build local opportunities that prevent migration due to economic necessity"
    }
  ];

  return (
    <section id="vision" className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="inline-block border-b-4 border-accent pb-2">Vision</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <blockquote className="text-xl md:text-2xl italic mb-4">
            "Success isn't about being rich; it's about making others rise with you."
          </blockquote>
          <p className="text-lg opacity-80">
            My mission is to create sustainable economic opportunities that transform communities
            and empower individuals to build their own success stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-start hover:bg-white/20 transition-colors"
            >
              <div className="mr-4 mt-1">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{point.text}</h3>
                <p className="opacity-80">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="btn bg-accent hover:bg-yellow-500 text-blue-900 font-bold"
          >
            Join My Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;