import React from 'react';
import { Upload, Wand2, Printer, Gift } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Share your favorite photo with us - family, pets, or individual portraits work perfectly",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: Wand2,
      title: "AI Magic Transforms",
      description: "Our advanced AI technology transforms your photo into a stunning cartoon portrait",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Printer,
      title: "Expert Printing",
      description: "We use premium sublimation printing to create a durable, vibrant, and dishwasher-safe mug",
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-50 to-orange-50"
    },
    {
      icon: Gift,
      title: "DIY Your Own Mug",
      description: "Design your mug with favorite words and stylish graphics- we’ll have it ready for pickup at our booth.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            How the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Magic</span> Happens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From photo to magical mug in just four simple steps. Watch your memories come to life!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Step {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {index === steps.length - 1 && (
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Your Order
                  </button>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800 mb-2">{step.title}</div>
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Typical Timeline</h3>
            <p className="text-xl opacity-90">From upload to your hands</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">5 min</div>
              <div className="text-sm opacity-90">Photo Upload & Review</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">10 min</div>
              <div className="text-sm opacity-90">AI Cartoon Creation</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">15 min</div>
              <div className="text-sm opacity-90">Sublimation Printing</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Ready!</div>
              <div className="text-sm opacity-90">Your Magical Mug</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;