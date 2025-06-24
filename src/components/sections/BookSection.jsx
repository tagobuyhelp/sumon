import React from 'react';

const BookSection = () => {
  return (
    <section id="book" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="inline-block border-b-4 border-primary pb-2">My Book</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Placeholder for Book Section content. This will be replaced with actual content about the book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;