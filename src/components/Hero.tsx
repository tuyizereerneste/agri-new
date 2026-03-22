import React from 'react';
import { ArrowRight, Leaf, Link } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-agri-background via-agri-background to-agri-accent bg-opacity-30 overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-agri-accent rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-agri-secondary rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-5 h-5 text-agri-primary" />
              <span className="text-agri-primary font-poppins font-600 text-sm tracking-wide">
                MONITORING AND BENEFICIARY MANAGEMENT
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-poppins font-800 text-agri-dark mb-6 leading-tight">
              Digital Infrastructure for Monitoring Development Programs
            </h1>

            <p className="text-lg text-agri-text mb-8 leading-relaxed max-w-xl">
              AgriFlow helps organizations manage beneficiaries, track field activities, and monitor program outcomes across agriculture, environmental initiatives, green energy projects, and community development programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-300">
              <div>
                <div className="text-3xl font-poppins font-700 text-agri-primary">500K+</div>
                <p className="text-agri-text mt-2">Beneficiaries Tracked</p>
              </div>
              <div>
                <div className="text-3xl font-poppins font-700 text-agri-primary">50+</div>
                <p className="text-agri-text mt-2">Organizations</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-agri-primary to-agri-secondary rounded-2xl opacity-10 blur-2xl"></div>
              <img
                src="/hero.jpg"
                alt="Agricultural Technology"
                loading='lazy'
                className="rounded-2xl shadow-medium w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
