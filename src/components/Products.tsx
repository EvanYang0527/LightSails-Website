import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "Family Portrait Mug",
      description: "Transform your family photo into a magical cartoon scene",
      beforeImage: "https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/6764125/pexels-photo-6764125.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$29.99",
      popular: true
    },
    {
      id: 2,
      title: "Pet Portrait Mug",
      description: "Your furry friend as a cartoon-style character",
      beforeImage: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$24.99",
      popular: false
    },
    {
      id: 3,
      title: "Holiday Special",
      description: "Seasonal themed mugs with cartoon portraits",
      beforeImage: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/6069114/pexels-photo-6069114.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$32.99",
      popular: false
    },
    {
      id: 4,
      title: "Wedding Portrait",
      description: "Romantic cartoon couples in fairy-tale style",
      beforeImage: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/6069113/pexels-photo-6069113.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$34.99",
      popular: true
    },
    {
      id: 5,
      title: "Kids Character Mug",
      description: "Turn your little ones into cartoon heroes",
      beforeImage: "https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/6764124/pexels-photo-6764124.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$26.99",
      popular: false
    },
    {
      id: 6,
      title: "Graduation Special",
      description: "Celebrate achievements with cartoon graduation portraits",
      beforeImage: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/6069115/pexels-photo-6069115.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$28.99",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Magical</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each mug is a unique piece of art, transforming your cherished memories into whimsical cartoon masterpieces
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                {/* Before Image */}
                <img
                  src={product.beforeImage}
                  alt={`${product.title} before`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredProduct === product.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                  }`}
                />
                
                {/* After Image */}
                <img
                  src={product.afterImage}
                  alt={`${product.title} after`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">Hover to see AI magic!</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DIY Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">DIY Your Own Mug</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Want to create your own masterpiece? Visit our booth at local markets and watch the magic happen in real-time!
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">📱</div>
              <h4 className="font-bold mb-2">Bring Your Photo</h4>
              <p className="text-sm opacity-90">Any photo from your phone works perfectly</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">🎨</div>
              <h4 className="font-bold mb-2">Watch AI Magic</h4>
              <p className="text-sm opacity-90">See your photo transform in minutes</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">☕</div>
              <h4 className="font-bold mb-2">Take Home Joy</h4>
              <p className="text-sm opacity-90">Your custom mug ready in 15 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;