'use client'

import { useState } from 'react'
import HoverSearchBar from '../components/HoverSearchBar'

export default function Home() {
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [lastSearch, setLastSearch] = useState("")

  const handleSearch = (query: string) => {
    setLastSearch(query)
    // Simulate search results
    const mockResults = [
      `Finding results for "${query}"...`,
      `📄 ${query} - Documentation`,
      `🔍 Advanced ${query} search`,
      `⭐ Popular ${query} items`,
      `📱 Mobile ${query} apps`
    ]
    setSearchResults(mockResults)
    
    // Clear results after 3 seconds for demo
    setTimeout(() => {
      setSearchResults([])
      setLastSearch("")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Hover Searchbar
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          A creative, hover-activated searchbar with smooth slide animations and glassmorphism design
        </p>
      </header>

      {/* Main Demo Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Hover over the spyglass icon ✨
          </h2>
          
          <div className="flex justify-center">
            <HoverSearchBar 
              placeholder="Search for anything magical..."
              onSearch={handleSearch}
              size="lg"
            />
          </div>

          {/* Search Results Display */}
          {searchResults.length > 0 && (
            <div className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search Results for "{lastSearch}":
              </h3>
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-white/60 rounded-lg text-gray-700 hover:bg-white/80 transition-colors duration-200 cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Size Variants Demo */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Different Sizes & Styles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Small Size */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Small Size</h3>
              <div className="flex justify-center">
                <HoverSearchBar 
                  placeholder="Quick search..."
                  size="sm"
                  onSearch={handleSearch}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">Perfect for compact layouts</p>
            </div>

            {/* Medium Size */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Medium Size</h3>
              <div className="flex justify-center">
                <HoverSearchBar 
                  placeholder="Standard search..."
                  size="md"
                  onSearch={handleSearch}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">Default size for most uses</p>
            </div>

            {/* Large Size */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Large Size</h3>
              <div className="flex justify-center">
                <HoverSearchBar 
                  placeholder="Enhanced search..."
                  size="lg"
                  onSearch={handleSearch}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">Hero sections & emphasis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/30 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">Hover Activation</h3>
              <p className="text-sm text-gray-600">Smooth slide-out on icon hover</p>
            </div>
            
            <div className="p-6 bg-white/30 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-800 mb-2">Glassmorphism</h3>
              <p className="text-sm text-gray-600">Modern glass-like aesthetic</p>
            </div>
            
            <div className="p-6 bg-white/30 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-semibold text-gray-800 mb-2">Gradient Effects</h3>
              <p className="text-sm text-gray-600">Beautiful color transitions</p>
            </div>
            
            <div className="p-6 bg-white/30 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
              <p className="text-sm text-gray-600">Works on all screen sizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Usage Example</h2>
          
          <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import HoverSearchBar from './components/HoverSearchBar'

function MyApp() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Implement your search logic here
  }

  return (
    <HoverSearchBar 
      placeholder="Search products..."
      onSearch={handleSearch}
      size="md"
      className="my-4"
    />
  )
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <p>Built with Next.js, React, and Tailwind CSS ❤️</p>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}