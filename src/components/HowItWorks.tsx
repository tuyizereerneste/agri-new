import React from 'react';
import { User, Landmark, Eye, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Register Beneficiaries',
    description: 'Organizations register individuals, households, or groups participating in programs.',
    number: '01',
  },
  {
    icon: Landmark,
    title: 'Record Project Activities',
    description: 'Field teams capture information about project interventions, services delivered, or resources distributed.',
    number: '02',
  },
  {
    icon: Eye,
    title: 'Monitor Participation',
    description: 'Organizations track beneficiary engagement and participation in programs.',
    number: '03',
  },
  {
    icon: BarChart3,
    title: 'Measure Outcomes',
    description: 'Collected data is transformed into insights and reports that demonstrate project impact.',
    number: '04',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            How Imbonicard Works
          </h2>
          <p className="text-xl text-agri-text max-w-2xl mx-auto">
            A streamlined workflow designed to simplify program monitoring and data collection across agriculture, environmental projects, green energy programs, and community development initiatives.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-agri-primary via-agri-secondary to-agri-primary transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-agri-background rounded-xl p-8 border-2 border-transparent hover:border-agri-primary transition-all duration-300 hover:shadow-medium">
                    <div className="absolute -top-8 -left-4 bg-white border-4 border-agri-background">
                      <div className="w-16 h-16 bg-gradient-to-br from-agri-primary to-agri-secondary rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="text-5xl font-poppins font-800 text-gray-100 mb-4">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-poppins font-700 text-agri-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-agri-text leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-xl overflow-hidden shadow-medium">
          <img
            src="/dashboard.jpg"
            alt="Workflow Visualization"
            loading="lazy"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
