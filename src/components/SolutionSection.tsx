import React from 'react';
import { Users, Map, BarChart3, Smartphone, Zap, Navigation2 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Beneficiary Management',
    description: 'Create structured profiles for individuals, households, or communities participating in programs.',
  },
  {
    icon: Navigation2,
    title: 'Project Monitoring',
    description: 'Track project activities, interventions, and services delivered to beneficiaries.',
  },
  {
    icon: Map,
    title: 'Geographic Data Tracking',
    description: 'Capture location information to map project activities and beneficiaries.',
  },
  {
    icon: Smartphone,
    title: 'Field Data Collection',
    description: 'Enable field teams to collect and update program data directly from the field.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring and Reporting',
    description: 'Generate insights and reports that support impact measurement and decision-making.',
  },
  {
    icon: Zap,
    title: 'Real-Time Insights',
    description: 'Access actionable data and analytics instantly across your entire organization.',
  },
];

export default function SolutionSection() {
  return (
    <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 bg-agri-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            A Modern Platform for Program Monitoring and Beneficiary Management
          </h2>
          <p className="text-xl text-agri-text max-w-3xl mx-auto">
            Imbonicard provides a centralized digital platform that enables organizations to manage beneficiaries, monitor project activities, and measure outcomes across multiple development sectors. The platform transforms field data into actionable insights, helping organizations improve transparency, accountability, and decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-agri-primary to-agri-secondary rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-poppins font-700 text-agri-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-agri-text leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-xl overflow-hidden shadow-medium">
          <img
            src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Imbonicard Platform Dashboard"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
