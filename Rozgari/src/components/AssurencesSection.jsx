import React, { useRef, useState, useEffect } from 'react';

const AssurancesSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to handle right arrow click
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to handle left arrow click
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Check scroll position to toggle arrow visibility
  const checkForScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    // Add scroll event listener to detect scrolling position
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', checkForScrollPosition);
    
    // Remove the listener on cleanup
    return () => container.removeEventListener('scroll', checkForScrollPosition);
  }, []);

  const assurances = [
    {
      title: 'Job Security',
      description: 'We ensure stable and secure employment opportunities across industries for all job seekers.',
    },
    {
      title: 'Fair Wages',
      description: 'We advocate for fair wages and ensure compliance with labor laws in all listed jobs.',
    },
    {
      title: 'Trustworthy Employers',
      description: 'We connect job seekers with verified and trustworthy employers to ensure a safe work environment.',
    },
    {
      title: 'Workplace Safety',
      description: 'We prioritize connecting candidates to employers that value and maintain a safe workplace.',
    },
    {
      title: 'Career Growth',
      description: 'Our platform provides access to opportunities that help individuals grow in their careers.',
    },
    {
      title: 'Diverse Opportunities',
      description: 'Rozgari offers a wide range of job opportunities catering to different skill sets and industries.',
    },
    {
      title: 'Easy Application',
      description: 'With our streamlined process, applying for jobs has never been easier or faster.',
    },
  ];

  return (
    <div className="relative bg-white py-14">
      <h2 className="text-3xl font-bold text-center mb-8">Our Promises</h2>

      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide p-6"
        >
          {assurances.map((assurance, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 w-72 flex-shrink-0 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">{assurance.title}</h3>
              <p className="text-gray-600">{assurance.description}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow for Scrolling */}
        {canScrollLeft && (
          <button
            onClick={handleScrollLeft}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            ←
          </button>
        )}

        {/* Right Arrow for Scrolling */}
        {canScrollRight && (
          <button
            onClick={handleScrollRight}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default AssurancesSection;
