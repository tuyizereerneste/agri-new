import React from 'react';

const platformFeatures = [
  {
    title: 'Beneficiary Management',
    description: 'Create structured profiles for individuals, households, or communities participating in programs.',
    image: '/beneficiary.jpg',
  },
  {
    title: 'Project Monitoring',
    description: 'Track project activities, interventions, and services delivered to beneficiaries.',
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Geographic Data Tracking',
    description: 'Capture location information to map project activities and beneficiaries.',
    image: '/geographic.jpg',
  },
  {
    title: 'Field Data Collection',
    description: 'Enable field teams to collect and update program data directly from the field.',
    image: '/data-collection.jpg',
  },
  {
    title: 'Monitoring and Reporting',
    description: 'Generate insights and reports that support impact measurement and decision-making.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-agri-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            Platform Capabilities
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className={`animate-slide-up ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-3xl font-poppins font-700 text-agri-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-agri-text leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-medium w-full h-96 object-cover"
                  />
                </>
              ) : (
                <>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-medium w-full h-96 object-cover mb-6"
                  />
                  <div>
                    <h3 className="text-3xl font-poppins font-700 text-agri-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-agri-text leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
