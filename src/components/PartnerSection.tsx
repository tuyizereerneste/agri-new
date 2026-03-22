import React from 'react';
import { Handshake, ArrowRight } from 'lucide-react';
import Button from './Button';

const partnerTypes = [
  'NGOs',
  'Development Organizations',
  'Environmental Initiatives',
  'Renewable Energy Programs',
  'Agricultural Development Programs',
  'Research Institutions',
];

export default function PartnerSection() {
  return (
    <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 bg-agri-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-6 h-6 text-agri-primary" />
              <span className="text-agri-primary font-poppins font-600 text-sm tracking-wide">
                PARTNERSHIP OPPORTUNITIES
              </span>
            </div>

            <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
              Organizations We Work With
            </h2>

            <p className="text-xl text-agri-text mb-8 leading-relaxed">
              AgriFlow partners with organizations across agriculture, environmental initiatives, green energy programs, and community development working to improve outcomes and track program impact.
            </p>

            <div className="mb-10">
              <h3 className="font-poppins font-700 text-agri-dark mb-6">Potential Partners Include:</h3>
              <div className="space-y-4">
                {partnerTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-agri-primary rounded-full"></div>
                    <span className="text-agri-text text-lg">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="primary" size="lg" className="flex items-center gap-2">
              Partner With AgriFlow
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Partnership"
              loading="lazy"
              className="rounded-xl shadow-medium w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
