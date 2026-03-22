import React from 'react';
import { Zap, Satellite, Smartphone, Truck, LineChart } from 'lucide-react';

const futureCapabilities = [
  {
    icon: LineChart,
    title: 'Advanced Analytics Dashboards',
    description: 'Advanced analytics dashboards for deep program insights and analysis.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Data Collection Tools',
    description: 'Offline-capable mobile applications for field teams.',
  },
  {
    icon: Satellite,
    title: 'Satellite Monitoring Integrations',
    description: 'Integration with satellite imagery for automated activity tracking.',
  },
  {
    icon: Zap,
    title: 'AI-Driven Insights',
    description: 'Machine learning models for predictive analytics and program evaluation.',
  },
  {
    icon: Truck,
    title: 'Donor Reporting Integrations',
    description: 'Seamless integration with donor reporting systems and requirements.',
  },
];

export default function FutureVision() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            Building Digital Infrastructure for Impact Monitoring
          </h2>
          <p className="text-xl text-agri-text max-w-3xl mx-auto">
            AgriFlow aims to become a comprehensive monitoring platform for development programs worldwide, with future capabilities including advanced analytics, mobile tools, satellite monitoring, and AI-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {futureCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-transparent hover:border-agri-primary transition-all duration-300 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-agri-secondary to-agri-primary rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-700 text-agri-dark mb-3">
                  {capability.title}
                </h3>
                <p className="text-agri-text leading-relaxed">{capability.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-agri-primary via-agri-secondary to-agri-primary rounded-xl p-12 text-center">
          <h3 className="text-3xl font-poppins font-700 text-white mb-4">
            The Future of Development Program Monitoring Starts Here
          </h3>
          <p className="text-lg text-green-100 mb-8">
            Join organizations transforming development impact through digital infrastructure
            and data-driven decision making.
          </p>
        </div>
      </div>
    </section>
  );
}
