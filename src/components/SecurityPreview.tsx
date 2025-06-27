
import React from 'react';
import { Shield, Scan, Eye, Settings } from 'lucide-react';

const SecurityPreview = () => {
  const scanResults = [
    { type: "Email", status: "Safe", count: 124, color: "text-green-600 bg-green-50" },
    { type: "Apps", status: "3 Threats Blocked", count: 42, color: "text-orange-600 bg-orange-50" },
    { type: "Web Searches", status: "Safe", count: 89, color: "text-green-600 bg-green-50" },
    { type: "Text Messages", status: "Safe", count: 67, color: "text-green-600 bg-green-50" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See Watchdog in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time dashboard showing how Watchdog protects your digital activities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Watchdog Security Dashboard</h3>
                    <p className="text-blue-100">Real-time protection status</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">ACTIVE</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">System Status</h4>
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">PROTECTED</div>
                  <p className="text-sm text-gray-600">Last scan: 30 seconds ago</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Threats Blocked Today</h4>
                    <Scan className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">12</div>
                  <p className="text-sm text-gray-600">↓ 40% from yesterday</p>
                </div>
              </div>
              
              {/* Scan Results */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Recent Scan Results</h4>
                {scanResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${result.color}`}>
                        <Eye className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{result.type}</div>
                        <div className="text-sm text-gray-600">{result.count} items scanned</div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${result.color}`}>
                      {result.status}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Control Panel */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">Scanning Controls</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Email', 'Apps', 'Web', 'Messages'].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                      <div className="w-10 h-6 bg-green-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPreview;
