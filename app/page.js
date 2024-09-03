import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Cyber-AI Fusion</h1>
          <ul className="flex space-x-4">
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow flex items-start justify-center bg-black pt-8">
        <div className="container mx-auto px-4">
          {/* Text Section */}
          <div className="text-left mb-4 px-4">
            <h2 className="text-4xl font-bold mb-2">Monitor, Detect, Protect</h2>
            <p className="text-lg mb-4">
              Real-time network monitoring and AI-powered threat detection to keep your systems safe.
            </p>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto px-4 m-3">
            <table className="table-auto w-full max-w-md mx-auto text-left border border-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-white">Site</th>
                  <th className="px-4 py-2 border border-white">Scan Duration</th>
                  <th className="px-4 py-2 border border-white">Vulnerabilities Found</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-white">example.com</td>
                  <td className="px-4 py-2 border border-white">15 mins</td>
                  <td className="px-4 py-2 border border-white">5</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-white">another-site.net</td>
                  <td className="px-4 py-2 border border-white">10 mins</td>
                  <td className="px-4 py-2 border border-white">3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-white">secure-site.org</td>
                  <td className="px-4 py-2 border border-white">20 mins</td>
                  <td className="px-4 py-2 border border-white">8</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-white">secure2-site.org</td>
                  <td className="px-4 py-2 border border-white">30 mins</td>
                  <td className="px-4 py-2 border border-white">28</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-white">secure3-site.org</td>
                  <td className="px-4 py-2 border border-white">25 mins</td>
                  <td className="px-4 py-2 border border-white">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>
        <div>
          <p className="p-6 m-3 border border-white">
            the graph wala part
          </p>
        </div>
      {/* Footer */}
      <footer className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cyber-AI Fusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
