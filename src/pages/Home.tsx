import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Building, Stethoscope, ShoppingBag, TreePine, Bus, Plus } from 'lucide-react';
import RecentlyAdded from '../components/RecentlyAdded';
import FeedbackSection from '../components/FeedbackSection';
import QRCode from '../components/QRCode';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-4">
            <MapPin className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Know Borivali
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A comprehensive local resource finder designed specifically for newcomers to Borivali. 
          Whether you're looking for hospitals, essential shops, peaceful parks, residential societies, 
          or transport connections, we help you discover everything you need to settle into your new neighborhood 
          with confidence and ease.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center">
          <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
            <Stethoscope className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Healthcare</h3>
          <p className="text-sm text-gray-600">Hospitals & Clinics</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
            <ShoppingBag className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Shopping</h3>
          <p className="text-sm text-gray-600">Shops & Essentials</p>
        </div>
        <div className="text-center">
          <div className="bg-emerald-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
            <TreePine className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Recreation</h3>
          <p className="text-sm text-gray-600">Parks & Amenities</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
            <Bus className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Transport</h3>
          <p className="text-sm text-gray-600">Connectivity Hubs</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Explore Borivali?
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our comprehensive directory of local resources, carefully organized to help you 
          find exactly what you're looking for in your new neighborhood.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/resources" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Browse Resources
          </Link>
          <Link 
            to="/add-resource" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Resource
          </Link>
        </div>
      </div>

      {/* Recently Added Section */}
      <div className="mb-8">
        <RecentlyAdded />
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">For Newcomers</h3>
          </div>
          <p className="text-gray-600">
            Moving to a new area can be overwhelming. Our curated listings help you quickly 
            identify essential services, amenities, and local businesses that matter most 
            during your settling-in period.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Building className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Community Driven</h3>
          </div>
          <p className="text-gray-600">
            Our platform grows with community contributions. Local residents and business owners 
            can add new resources, ensuring our directory stays current and comprehensive 
            for everyone's benefit.
          </p>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mb-8">
        <FeedbackSection />
      </div>

      {/* QR Code Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Share Know Borivali
        </h3>
        <p className="text-gray-600 mb-4">
          Scan this QR code to quickly access our website on your mobile device
        </p>
        <div className="flex justify-center">
          <QRCode 
            url="https://shimmering-pavlova-1d0bb6.netlify.app/" 
            size={120}
            className="border border-gray-200 rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;