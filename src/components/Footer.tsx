import React from 'react';
import { Coffee, Heart, MapPin, Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LightSails</h3>
                  <p className="text-white/70 text-sm">Maryland's Magical Mug Makers</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Transform your favorite photos into magical cartoon portraits with our custom sublimation mugs. Perfect for gifts, memories, and everyday magic!
              </p>

              <div className="flex items-center space-x-2 text-white/70 mb-4">
                <MapPin className="h-4 w-4 text-pink-400" />
                <span>Proudly serving Maryland communities</span>
              </div>

              <div className="flex items-center space-x-2 text-white/70">
                <Heart className="h-4 w-4 text-red-400" />
                <span>Local • Artisan • AI-Powered</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-yellow-300">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Our Products', id: 'products' },
                  { name: 'How It Works', id: 'how-it-works' },
                  { name: 'Find Us', id: 'events' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-white/70 hover:text-yellow-300 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-yellow-300">Stay Connected</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/70">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">lightsailsllc@gmail.com</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Phone className="h-4 w-4 mr-3 text-green-400" />
                  <span className="text-sm">(240) 470-6263</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm text-white/70 mb-3">Follow our journey:</p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com/lightsailsmugs/"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full hover:from-green-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4 text-yellow-300">
                  Never Miss the Magic! ✨
                </h4>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get notified about upcoming markets, new designs, and special offers. 
                  Join our community of mug magic enthusiasts!
                </p>
                
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email for magic updates"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2025 LightSails, LLC. All rights reserved.</p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Shipping Info</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Returns</a>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <p className="text-white/50 text-xs">
                Made with <Heart className="h-3 w-3 inline text-red-400 mx-1" /> in Maryland • 
                Bringing cartoon magic to everyday moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;