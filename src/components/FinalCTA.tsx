import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-5xl md:text-5xl font-poppins font-800 text-agri-dark mb-6">
          Transform the Way You Manage Development Programs
        </h2>

        <p className="text-xl text-agri-text mb-12 leading-relaxed">
          AgriFlow helps organizations across agriculture, environmental conservation, green energy,
          and development programs build digital infrastructure for effective monitoring and data-driven
          decision making. Ready to get started?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="primary"
            size="lg"
            className="flex items-center justify-center gap-2"
            onClick={() => navigate('/contact')}
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-2"
            onClick={() => navigate('/contact')}
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Button>
        </div>

        <p className="text-agri-text">
          Questions? Reach out to us at{' '}
          <a href="mailto:hello@agriflow.tech" className="text-agri-primary font-poppins font-600 hover:underline">
            hello@agriflow.tech
          </a>
        </p>
      </div>
    </section>
  );
}
