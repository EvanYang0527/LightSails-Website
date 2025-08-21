import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      name: "Ellicott City Spring Market",
      date: "March 15-16, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Historic Ellicott City, MD",
      description: "Join us for the opening weekend of spring market season!",
      featured: true
    },
    {
      name: "Annapolis Farmers Market",
      date: "March 22, 2025",
      time: "8:00 AM - 1:00 PM",
      location: "West Street, Annapolis, MD",
      description: "Weekly market with fresh produce and local artisans",
      featured: false
    },
    {
      name: "Columbia Festival of Arts",
      date: "April 5-6, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Merriweather Park, Columbia, MD",
      description: "Annual celebration of local artists and creators",
      featured: true
    },
    {
      name: "Frederick Craft Fair",
      date: "April 12-13, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Baker Park, Frederick, MD",
      description: "Handmade goods and artisan crafts in beautiful Baker Park",
      featured: false
    },
    {
      name: "Baltimore Harbor Festival",
      date: "May 3-5, 2025",
      time: "11:00 AM - 7:00 PM",
      location: "Inner Harbor, Baltimore, MD",
      description: "Three-day festival celebrating Maryland's harbor culture",
      featured: true
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Find Us Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Maryland</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come see us in person, sip some coffee, and design your own mug at our booth! 
            We love meeting our community at local markets and festivals.
          </p>
        </div>

        {/* Featured CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Live Mug Creation!</h3>
          <p className="text-xl mb-6 opacity-90">
            Watch your photo transform into cartoon art right before your eyes. 
            Most mugs are ready in just 15 minutes!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              ✨ Live AI Demonstrations
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              ☕ Free Coffee Samples
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              🎨 Custom Design Consultations
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                event.featured ? 'ring-2 ring-purple-300 transform hover:-translate-y-1' : 'hover:-translate-y-1'
              }`}
            >
              {event.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-bold">
                  🌟 Featured Event
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-pink-600" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-8">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2">
                      <span>Get Directions</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Never Miss an Event!
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about upcoming markets, 
            special offers, and new product launches.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;