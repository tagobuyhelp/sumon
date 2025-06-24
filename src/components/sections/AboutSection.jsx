import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="inline-block border-b-4 border-blue-800 pb-2">About Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Placeholder for About Section content. This will be replaced with actual content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;