import React from 'react';
import { Leaf, Trees, Zap, Users, Heart, BookOpen } from 'lucide-react';

const audienceGroups = [
  {
    icon: Leaf,
    title: 'Agricultural Development',
    description: 'Monitor farmer programs, agricultural initiatives, and land activities.',
  },
  {
    icon: Trees,
    title: 'Environmental Projects',
    description: 'Track beneficiaries involved in conservation and environmental restoration programs.',
  },
  {
    icon: Zap,
    title: 'Green Energy Programs',
    description: 'Monitor the distribution and adoption of renewable energy technologies such as solar systems.',
  },
  {
    icon: Users,
    title: 'Community Development Programs',
    description: 'Manage and monitor programs supporting local communities and vulnerable populations.',
  },
  {
    icon: Heart,
    title: 'NGOs and Development Organizations',
    description: 'Manage complex field programs with reliable monitoring systems.',
  },
  {
    icon: BookOpen,
    title: 'Research Institutions',
    description: 'Support research and evaluation of development program outcomes.',
  },
];

export default function WhoItIsFor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            Sectors That Use AgriFlow
          </h2>
          <p className="text-xl text-agri-text max-w-2xl mx-auto">
            AgriFlow serves organizations across multiple development sectors working to improve outcomes and track program impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-agri-background to-white p-8 rounded-xl border-2 border-transparent hover:border-agri-primary hover:shadow-medium transition-all duration-300 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-agri-primary to-agri-secondary rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-700 text-agri-dark mb-4">
                  {group.title}
                </h3>
                <p className="text-lg text-agri-text leading-relaxed">{group.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-agri-primary to-agri-secondary rounded-xl p-12 text-center">
          <h3 className="text-3xl font-poppins font-700 text-white mb-4">
            Build Data-Driven Development Programs
          </h3>
          <p className="text-lg text-green-100 mb-8">
            AgriFlow enables organizations across all development sectors to manage beneficiaries effectively and track program impact with reliable digital infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
