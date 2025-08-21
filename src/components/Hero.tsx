import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-1/4 left-1/4 text-yellow-300 h-6 w-6 animate-bounce" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-1/3 right-1/4 text-pink-300 h-4 w-4 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/3 text-blue-300 h-5 w-5 animate-bounce" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-1/4 right-1/3 text-green-300 h-4 w-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Bring Your Story to Life
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            — On a Mug
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your favorite photos into magical cartoon portraits 
          with our custom sublimation mugs. Perfect for gifts, memories, and everyday magic!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToHowItWorks}
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Find Us at Events
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Maryland</div>
            <div className="text-sm">Local Business</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">AI-Powered</div>
            <div className="text-sm">Custom Art</div>
          </div>
        </div>

        {/* Featured Mug Display */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            {/* Mug image */}
            <img
              src="/images/mug1.png"
              alt="Custom mug with vibrant cartoon art"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500"
            />
            {/* Accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              New Arrival
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;