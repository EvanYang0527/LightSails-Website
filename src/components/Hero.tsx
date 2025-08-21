import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 text-yellow-300 h-6 w-6 animate-bounce" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-1/3 right-1/4 text-pink-300 h-4 w-4 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/3 text-blue-300 h-5 w-5 animate-bounce" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-1/4 right-1/3 text-green-300 h-4 w-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid layout: big image on left, content on right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Left: Hero Image (HUGE) */}
        <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
          {/* Gradient blobs behind image (modern artist style) */}
          <div
            aria-hidden
            className="absolute -top-14 -left-20 h-72 w-72 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-yellow-300 via-pink-400 to-fuchsia-500"
          />
          <div
            aria-hidden
            className="absolute bottom-0 -right-10 h-80 w-80 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-600"
          />

          <div className="relative -ml-2 sm:-ml-6 lg:-ml-10">
            <img
              src="/images/mug1.png"
              alt="Custom mug with vibrant cartoon art"
              className="h-[68vh] sm:h-[72vh] lg:h-[78vh] w-auto object-cover rounded-[2rem] ring-1 ring-white/20 saturate-125 contrast-110
                         transform hover:scale-[1.02] hover:-rotate-2 transition-all duration-500"
            />
            {/* Subtle frame accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2rem] ring-8 ring-white/10"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bring Your Story to Life
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              — On a Mug
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl lg:max-w-none leading-relaxed mx-auto lg:mx-0">
            Transform your favorite photos into magical cartoon portraits with our custom
            sublimation mugs. Perfect for gifts, memories, and everyday magic!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button
              onClick={scrollToHowItWorks}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold
                         hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                         flex items-center space-x-2"
            >
              <span>See How It Works</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300"
            >
              Find Us at Events
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 text-white/80">
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
