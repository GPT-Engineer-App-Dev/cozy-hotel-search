import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

const Index = () => {
  const [destination, setDestination] = useState('');

  const popularDestinations = [
    { name: 'Paris', image: '/placeholder.svg', rating: 4.8 },
    { name: 'New York', image: '/placeholder.svg', rating: 4.7 },
    { name: 'Tokyo', image: '/placeholder.svg', rating: 4.9 },
    { name: 'London', image: '/placeholder.svg', rating: 4.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">HotelFinder</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">Sign In</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="relative mb-24">
          <div className="absolute inset-0 bg-blue-600 opacity-80 rounded-3xl"></div>
          <img src="/placeholder.svg" alt="Luxury hotel" className="mx-auto object-cover w-full h-[600px] rounded-3xl" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Your Dream Getaway
            </motion.h2>
            <motion.p 
              className="text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find the perfect stay for your next adventure
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/90 backdrop-blur-md w-full max-w-4xl">
                <CardContent className="p-6">
                  <form className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <Input
                        type="text"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full"
                        icon={<MapPin className="text-gray-400" />}
                      />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <Input type="date" className="w-full" icon={<Calendar className="text-gray-400" />} />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors flex-1">
                      <Search className="mr-2" /> Search Hotels
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src={destination.image} alt={destination.name} className="mx-auto object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h4 className="font-semibold text-xl text-white">{destination.name}</h4>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span>{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-white">
                    <Button variant="link" className="text-blue-600 p-0 hover:underline">
                      Explore hotels <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24 bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose HotelFinder?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Best Prices", description: "We guarantee the best rates for your stay.", icon: "💰" },
              { title: "Wide Selection", description: "Choose from thousands of hotels worldwide.", icon: "🌎" },
              { title: "24/7 Support", description: "Our customer support team is always here to help.", icon: "🛎️" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center mb-24">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Stay?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands of happy travelers who found their ideal accommodations with HotelFinder</p>
          <Button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors text-lg">
            Start Your Search Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">HotelFinder</h4>
              <p className="text-gray-400">Discover amazing stays around the world.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2023 HotelFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;