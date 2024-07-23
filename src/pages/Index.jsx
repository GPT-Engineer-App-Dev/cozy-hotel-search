import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, ChevronRight, DollarSign, Percent, Clock, Globe, Headphones, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Index = () => {
  const [destination, setDestination] = useState('');

  const popularDestinations = [
    { 
      name: 'Paris', 
      image: '/placeholder.svg', 
      rating: 4.8, 
      price: 150,
      description: 'The City of Light beckons with its iconic Eiffel Tower and world-class cuisine.',
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'],
    },
    { 
      name: 'New York', 
      image: '/placeholder.svg', 
      rating: 4.7, 
      price: 200,
      description: 'Experience the buzz of the Big Apple, from Times Square to Central Park.',
      attractions: ['Times Square', 'Central Park', 'Statue of Liberty'],
    },
    { 
      name: 'Tokyo', 
      image: '/placeholder.svg', 
      rating: 4.9, 
      price: 180,
      description: 'Discover the perfect blend of tradition and technology in Japan's capital.',
      attractions: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing'],
    },
    { 
      name: 'London', 
      image: '/placeholder.svg', 
      rating: 4.6, 
      price: 170,
      description: 'Immerse yourself in history and culture in this vibrant British metropolis.',
      attractions: ['Big Ben', 'Tower Bridge', 'Buckingham Palace'],
    },
  ];

  const features = [
    { 
      title: "Best Price Guarantee", 
      description: "We promise the most competitive rates. Found a better price? We'll match it!", 
      icon: <DollarSign className="w-10 h-10 text-green-500" />,
      detail: "Our algorithm constantly scans thousands of sites to ensure you get the best deal."
    },
    { 
      title: "Vast Selection", 
      description: "Over 1 million properties worldwide, from cozy B&Bs to luxury resorts.", 
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      detail: "We partner with hotels in 190+ countries to offer you unparalleled choice."
    },
    { 
      title: "24/7 Customer Support", 
      description: "Our dedicated team is always ready to assist you, anytime, anywhere.", 
      icon: <Headphones className="w-10 h-10 text-purple-500" />,
      detail: "Multi-lingual support available via phone, email, and live chat."
    },
    { 
      title: "Flexible Bookings", 
      description: "Plans change. That's why we offer free cancellation on most rooms.", 
      icon: <Clock className="w-10 h-10 text-orange-500" />,
      detail: "Cancel up to 24 hours before check-in on eligible bookings."
    },
    { 
      title: "Rewards Program", 
      description: "Earn points on every booking and redeem them for free stays.", 
      icon: <Percent className="w-10 h-10 text-red-500" />,
      detail: "Get exclusive member prices and accumulate points faster with our tiered system."
    },
    { 
      title: "Verified Reviews", 
      description: "Real reviews from real guests. We ensure authenticity.", 
      icon: <Shield className="w-10 h-10 text-teal-500" />,
      detail: "Over 50 million verified reviews help you make informed decisions."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header remains the same */}
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero section remains the same */}

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
                    <p className="text-sm text-gray-600 mb-2">{destination.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-blue-600">${destination.price}</span>
                      <Badge variant="secondary">per night</Badge>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-1">Top Attractions:</h5>
                      <ul className="text-sm text-gray-600">
                        {destination.attractions.map((attraction, i) => (
                          <li key={i}>{attraction}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                    <p className="text-sm text-gray-500">{feature.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call-to-action section and Footer remain the same */}
      </main>

      {/* Footer remains the same */}
    </div>
  );
};

export default Index;