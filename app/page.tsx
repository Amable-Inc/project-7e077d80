'use client';

import { useState } from 'react';
import { ShoppingBag, Star, Truck, Shield, Heart, ChevronRight } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                LuxeWear
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">Shop</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">Collections</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition">Contact</a>
            </div>
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart (0)</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Comfort Meets
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {' '}Luxury
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Experience the perfect blend of style, comfort, and quality with our premium underwear collection. Designed for your everyday confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition transform hover:scale-105 flex items-center justify-center">
                  Shop Now <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
                  Explore Collections
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-2 text-gray-600">4.9 (2,341 reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-200 to-pink-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80"
                  alt="Premium Underwear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <p className="text-sm text-gray-600">Free Shipping</p>
                <p className="text-2xl font-bold text-purple-600">Orders $50+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guaranteed</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Comfort First</h3>
              <p className="text-gray-600 text-sm">Premium fabrics & design</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find your perfect fit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Women's Collection", image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=800&q=80", color: "from-pink-500 to-rose-500" },
              { title: "Men's Collection", image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?auto=format&fit=crop&w=800&q=80", color: "from-blue-500 to-indigo-500" },
              { title: "Unisex Basics", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80", color: "from-purple-500 to-pink-500" }
            ].map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-50 transition`}></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <button className="text-white font-semibold flex items-center group-hover:gap-2 transition-all">
                      Shop Now <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
            <p className="text-gray-600 text-lg">Our most loved products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Classic Comfort Brief", price: "$24.99", image: "https://images.unsplash.com/photo-1639479358856-91f12d2bfc07?auto=format&fit=crop&w=400&q=80", rating: 4.8 },
              { name: "Premium Boxer Set", price: "$34.99", image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe4f?auto=format&fit=crop&w=400&q=80", rating: 4.9 },
              { name: "Luxury Lace Collection", price: "$29.99", image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc5e4?auto=format&fit=crop&w=400&q=80", rating: 4.7 },
              { name: "Athletic Performance", price: "$27.99", image: "https://images.unsplash.com/photo-1594652634010-7bb7ffe439fd?auto=format&fit=crop&w=400&q=80", rating: 4.9 }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <p className="text-xl font-bold text-purple-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Best underwear I've ever owned! The quality is outstanding and they're incredibly comfortable.", rating: 5 },
              { name: "Michael R.", text: "Finally found underwear that fits perfectly and lasts. Worth every penny!", rating: 5 },
              { name: "Emily K.", text: "The fabric is so soft and the designs are beautiful. I've ordered three times already!", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-purple-100 text-lg mb-8">Get 15% off your first order plus exclusive deals and style tips</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                LuxeWear
              </h3>
              <p className="text-sm">Premium comfort for everyday confidence.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Women's</a></li>
                <li><a href="#" className="hover:text-white transition">Men's</a></li>
                <li><a href="#" className="hover:text-white transition">Unisex</a></li>
                <li><a href="#" className="hover:text-white transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 LuxeWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
