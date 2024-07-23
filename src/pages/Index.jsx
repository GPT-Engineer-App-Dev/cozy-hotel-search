import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [destination, setDestination] = useState('');

  const popularDestinations = [
    { name: 'Paris', image: '/placeholder.svg' },
    { name: 'New York', image: '/placeholder.svg' },
    { name: 'Tokyo', image: '/placeholder.svg' },
    { name: 'London', image: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HotelFinder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h2>
          <p className="text-xl text-gray-600">Discover amazing hotels around the world</p>
        </section>

        <Card className="mb-12">
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
              <Button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <Search className="mr-2" /> Search Hotels
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={destination.image} alt={destination.name} className="mx-auto object-cover w-full h-48" />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">{destination.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Choose HotelFinder?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Best Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We guarantee the best rates for your stay.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Wide Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Choose from thousands of hotels worldwide.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our customer support team is always here to help.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 HotelFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;