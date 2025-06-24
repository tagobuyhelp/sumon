import { FaMedal, FaUsers, FaBook, FaNewspaper } from 'react-icons/fa';

const AboutSection = () => {
  const achievements = [
    { text: "Trained 6,000+ students", icon: <FaUsers /> },
    { text: "Created multiple job-generating ventures", icon: <FaMedal /> },
    { text: "Authored: \"How to Become a Successful Businessman\"", icon: <FaBook /> },
    { text: "Founded: Ek Nojore Magazine", icon: <FaNewspaper /> }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column - Image */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Replace with actual image */}
              <div className="bg-gray-300 h-[500px] rounded-lg overflow-hidden">
                <img 
                  src="/placeholder-profile.jpg" 
                  alt="Kazi Mahasin Azim" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x600?text=Kazi+Mahasin+Azim";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">15+ Years</p>
                <p className="text-sm">Entrepreneurial Journey</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="inline-block border-b-4 border-primary pb-2">My Journey</span>
            </h2>
            
            <p className="text-lg mb-6">
              Born in a modest village in Murshidabad, I chose a path less traveled. I dropped out of law college 
              and pursued real-world learning — odd jobs, technical training, and entrepreneurial hustle.
            </p>
            
            <p className="text-lg mb-6">
              From a small computer center to working in Saudi Arabia, each step sharpened my business skills.
              In 2016, I founded <strong>EME Academy</strong> in Kolkata to bridge India's skill gap.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Achievements:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">{achievement.icon}</div>
                  <p>{achievement.text}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;