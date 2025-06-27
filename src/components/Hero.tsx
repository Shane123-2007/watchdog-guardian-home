
import React from 'react';
import { Shield, Scan, Eye, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-700/50">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">AI-Powered Security</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Watchdog
              </span>
              <br />
              <span className="text-white">AI Scanner</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Continuously scan your devices for spyware, adware, and scams. 
              <br className="hidden lg:block" />
              Protect your apps, emails, searches, and messages with intelligent AI monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Scan className="mr-2 h-5 w-5" />
                Start Free Scan
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-400 text-blue-100 hover:bg-blue-800/50 backdrop-blur-sm"
              >
                <Eye className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Privacy-first design</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Security dashboard preview */}
          <div className="flex-1 relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white/70 ml-2">Watchdog Scanner</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">System Status</span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">PROTECTED</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Last Scan</span>
                    <span className="text-white">2 minutes ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Threats Blocked</span>
                    <span className="text-green-400 font-semibold">247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Apps Monitored</span>
                    <span className="text-white">42</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-xs text-white/60 mt-1">Scan Progress: 80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
