import React from 'react';
import { Database, Eye, TrendingUp, ClipboardList } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'Fragmented Beneficiary Data',
    description:
      'Organizations often store beneficiary information in spreadsheets, paper forms, or disconnected systems.',
  },
  {
    icon: Eye,
    title: 'Limited Visibility into Field Activities',
    description:
      'Program managers struggle to track what is happening on the ground in real time.',
  },
  {
    icon: TrendingUp,
    title: 'Difficulty Measuring Project Outcomes',
    description:
      'Without structured monitoring systems, organizations cannot easily measure the real impact of their programs.',
  },
  {
    icon: ClipboardList,
    title: 'Inefficient Data Collection',
    description:
      'Manual data collection leads to inconsistencies, delays, and unreliable reporting.',
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
            The Challenge of Monitoring Field Programs
          </h2>
          <p className="text-xl text-agri-text max-w-2xl mx-auto">
            Development organizations across agriculture, environmental initiatives, green energy, and community programs face challenges in managing beneficiaries and tracking program impact with limited digital infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-soft hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-agri-accent rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-agri-primary" />
                </div>
                <h3 className="text-xl font-poppins font-700 text-agri-dark mb-3">
                  {problem.title}
                </h3>
                <p className="text-agri-text leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
