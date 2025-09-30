import React from 'react';
import { Heart, Users, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">LightSails</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                Our Story
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LightSails, LLC is a passionate Maryland-based small business that blends cutting-edge AI creativity 
                with traditional sublimation printing. What started as a love project has grown into a beloved presence 
                at local farmers markets and craft shows across our beautiful state.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every coffee moment should be special. Our mission is to create personal, 
                artistic mugs that transform your everyday coffee breaks into enchanting experiences. 
                Each mug tells a unique story, bringing joy and wonder to your daily routine.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                Community First
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a proud Maryland business, we're deeply rooted in our local community. 
                You'll find us at farmers markets, craft shows, and festivals throughout the state, 
                creating magical moments one mug at a time. We love meeting our neighbors and 
                bringing families together through personalized art.
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/BoothDesign.JPG"
                alt="Happy family at farmers market"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2023</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <MapPin className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <div className="text-sm text-gray-600 font-medium">Maryland</div>
                <div className="text-sm text-gray-500">Proud Local</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Artisan Quality",
              description: "Every mug is crafted with attention to detail and love for the art of sublimation printing.",
              color: "from-blue-500 to-purple-600"
            },
            {
              title: "AI Innovation",
              description: "Cutting-edge AI technology transforms your photos into stunning cartoon masterpieces.",
              color: "from-purple-500 to-pink-600"
            },
            {
              title: "Personal Touch",
              description: "Each creation is uniquely yours, telling your story in a magical, cartoon-inspired style.",
              color: "from-pink-500 to-orange-500"
            }
          ].map((value, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;