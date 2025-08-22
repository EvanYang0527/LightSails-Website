import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M20%2020c0%200%200-8%200-8s8%200%208%200%200%208%200%208-8%200-8%200Z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Create Something 
            <span className="block text-yellow-300">Magical Together!</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your photos to life? Have questions about our process? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project or ask any questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <Mail className="h-5 w-5 mr-4 text-yellow-400" />
                  <span>lightsailsllc@gmail.com</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Phone className="h-5 w-5 mr-4 text-yellow-400" />
                  <span>(240) 470-6263</span>
                </div>
                <div className="flex items-center text-white/90">
                  <MapPin className="h-5 w-5 mr-4 text-yellow-400" />
                  <span>Maryland, USA</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm leading-relaxed">
                  We typically respond to messages within 24 hours. 
                  For urgent requests, find us at one of our upcoming events!
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.instagram.com/lightsailsmugs/"
                  className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl text-center hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Instagram className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-medium text-sm">Instagram</div>
                </a>
                
                <a
                  href="#"
                  className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl text-center hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Facebook className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-medium text-sm">Facebook</div>
                </a>
                
                <a
                  href="#"
                  className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-2xl text-center hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 group"
                >
                  <MessageCircle className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-medium text-sm">WhatsApp</div>
                </a>
              </div>

              <p className="text-white/80 text-sm mt-6 text-center">
                See behind-the-scenes content, customer creations, and event updates!
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Market Hours</h3>
              
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Saturday Markets</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday Markets</span>
                  <span className="font-medium">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Festival Events</span>
                  <span className="font-medium">Varies by Event</span>
                </div>
                <div className="flex justify-between">
                  <span>Custom Orders</span>
                  <span className="font-medium">By Appointment</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  * Hours may vary by season and weather. Check our social media for real-time updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;