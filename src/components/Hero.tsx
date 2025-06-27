
import React from 'react';
import { Shield, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-6 text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
            <Shield className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Protect Your Digital Life with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Watchdog AI Scanner
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Advanced AI-powered security that continuously scans your apps, emails, searches, and messages 
          for spyware, adware, and scams. Complete control over what gets scanned.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download Free
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
            <div className="text-blue-100">Threat Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">100K+</div>
            <div className="text-blue-100">Protected Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-blue-100">Real-time Monitoring</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
