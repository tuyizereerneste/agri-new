import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Loader } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        // Simulate API call
      const submitError = new Error('Failed to send message. Please try again.');

      if (submitError) throw submitError;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@agriflow.tech',
      href: 'mailto:hello@agriflow.tech',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+250 784 263 852',
      href: 'tel:+250 784 263 852',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1 KN 78 St, Kigali, Rwanda',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-agri-background min-h-screen pt-20">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-6xl font-poppins font-800 text-agri-dark mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-agri-text max-w-2xl mx-auto">
                Have questions about AgriFlow? Want to discuss a partnership or explore how our
                platform can support your agricultural, environmental, or development projects?
                We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="animate-slide-in-left">
                <div className="bg-white rounded-xl shadow-soft p-8">
                  <h2 className="text-3xl font-poppins font-700 text-agri-dark mb-8">
                    Send us a Message
                  </h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-poppins font-600">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-poppins font-600">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="demo">Request a Demo</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="agricultural">Agricultural Project Monitoring</option>
                        <option value="environmental">Environmental Project Monitoring</option>
                        <option value="green_energy">Green Energy Data Tracking</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-poppins font-600 text-agri-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us more about your project or inquiry..."
                      ></textarea>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => {}}
                    >
                      {loading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>

                  <p className="text-sm text-agri-text mt-6 text-center">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right space-y-8">
                <div>
                  <h2 className="text-3xl font-poppins font-700 text-agri-dark mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.href}
                          className="flex gap-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-medium hover-lift transition-all"
                        >
                          <div className="w-14 h-14 bg-agri-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-7 h-7 text-agri-primary" />
                          </div>
                          <div>
                            <h3 className="font-poppins font-700 text-agri-dark mb-1">
                              {info.label}
                            </h3>
                            <p className="text-agri-text">{info.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-700 text-agri-dark mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="w-14 h-14 bg-agri-primary text-white rounded-lg flex items-center justify-center hover:bg-agri-secondary transition-all hover-lift"
                          title={social.label}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-agri-primary to-agri-secondary rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-poppins font-700 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-green-100">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-poppins font-800 text-agri-dark mb-6">
              Monitoring Solutions for Every Sector
            </h2>
            <p className="text-lg text-agri-text max-w-3xl mx-auto mb-12">
              AgriFlow provides comprehensive data collection and monitoring solutions for
              agricultural programs, environmental projects, green energy initiatives, and
              development programs worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Agricultural Programs',
                  description: 'Monitor farmer networks, land usage, and crop production.',
                },
                {
                  title: 'Environmental Projects',
                  description:
                    'Track conservation initiatives, biodiversity data, and environmental metrics.',
                },
                {
                  title: 'Green Energy',
                  description: 'Monitor renewable energy projects and sustainability metrics.',
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="bg-agri-background p-8 rounded-xl border-2 border-agri-accent hover:border-agri-primary transition-all hover-lift"
                >
                  <h3 className="text-xl font-poppins font-700 text-agri-dark mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-agri-text">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
