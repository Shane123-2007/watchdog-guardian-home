
import React from 'react';
import { Shield, Scan, Eye, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Scan className="h-8 w-8 text-blue-600" />,
      title: "Continuous Scanning",
      description: "AI-powered real-time monitoring of all your apps, emails, searches, and text messages for threats.",
      highlight: "24/7 Protection"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Multi-Threat Detection",
      description: "Advanced detection of spyware, adware, scams, and malicious content across all your digital activities.",
      highlight: "99.9% Accuracy"
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Privacy Control",
      description: "Complete transparency with detailed logs of what's being scanned and blocked, with full user control.",
      highlight: "Your Data, Your Rules"
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Selective Scanning",
      description: "Granular control over what areas Watchdog can scan. Choose specific apps, folders, or communication channels.",
      highlight: "Customizable Protection"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Security for Modern Devices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watchdog uses advanced artificial intelligence to protect your digital life from emerging threats,
            giving you peace of mind and complete control over your security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Digital Life?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust Watchdog AI Scanner to protect their devices from digital threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
