import React from 'react';
import { TrendingUp, Target, Share2, Brain } from 'lucide-react';

const impactPoints = [
  {
    icon: TrendingUp,
    title: 'Manage Beneficiary Data Effectively',
    description: 'Structured digital systems ensure reliable beneficiary information across all program types.',
  },
  {
    icon: Target,
    title: 'Monitor Field Activities in Real Time',
    description: 'Real-time tracking capabilities enable program managers to see what is happening on the ground.',
  },
  {
    icon: Share2,
    title: 'Improve Transparency and Accountability',
    description: 'Transparent data systems build trust with donors, partners, and stakeholders.',
  },
  {
    icon: Brain,
    title: 'Measure Program Outcomes',
    description: 'Demonstrate impact to partners and donors through reliable data and comprehensive reporting.',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 bg-agri-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-8">
              Supporting Data-Driven Development Programs
            </h2>

            <p className="text-xl text-agri-text mb-8 leading-relaxed">
              AgriFlow helps organizations manage beneficiary data effectively, monitor field activities in real time, improve transparency and accountability, and measure program outcomes.
            </p>

            <div className="space-y-6">
              {impactPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-agri-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-700 text-agri-dark mb-2">{point.title}</h3>
                      <p className="text-agri-text">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800"
              loading="lazy"
              alt="Data Analytics"
              className="rounded-xl shadow-medium w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-300">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-poppins font-800 text-agri-primary">500K+</div>
            <p className="text-agri-text mt-2">Beneficiaries Tracked</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl font-poppins font-800 text-agri-primary">50+</div>
            <p className="text-agri-text mt-2">Organizations</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-poppins font-800 text-agri-primary">100K+</div>
            <p className="text-agri-text mt-2">Program Records</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="text-4xl font-poppins font-800 text-agri-primary">30+</div>
            <p className="text-agri-text mt-2">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
