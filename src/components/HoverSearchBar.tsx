'use client'

import { useState, useRef, useEffect } from 'react'

interface HoverSearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function HoverSearchBar({ 
  placeholder = "Search anything...",
  onSearch,
  className = "",
  size = 'md'
}: HoverSearchBarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const sizeClasses = {
    sm: 'h-10 w-64',
    md: 'h-12 w-80',
    lg: 'h-14 w-96'
  }

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (!isFocused) {
      setIsHovered(false)
    }
  }

  const handleInputFocus = () => {
    setIsFocused(true)
    setIsHovered(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    if (!searchQuery) {
      setIsHovered(false)
    }
  }

  useEffect(() => {
    if (isHovered && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isHovered])

  return (
    <div 
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spyglass Icon - Always Visible */}
      <div className={`
        relative z-20 flex items-center justify-center
        ${size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-12 h-12' : 'w-14 h-14'}
        rounded-full cursor-pointer
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
        hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
        shadow-lg hover:shadow-xl
        transform transition-all duration-300 ease-out
        ${isHovered ? 'rotate-12 scale-110' : 'hover:rotate-6 hover:scale-105'}
        group
      `}>
        <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"></div>
        <svg 
          className={`${iconSizes[size]} text-white transform transition-all duration-300 
            ${isHovered ? 'rotate-45' : 'group-hover:rotate-12'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="21 21l-4.35-4.35"></path>
        </svg>
      </div>

      {/* Searchbar Container */}
      <div className={`
        absolute right-0 top-0
        ${sizeClasses[size]}
        bg-gradient-to-r from-white/80 via-white/90 to-white/95
        backdrop-blur-lg border border-white/20
        rounded-full shadow-2xl
        transform transition-all duration-500 ease-out
        ${isHovered || isFocused 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
        }
        ${isFocused ? 'ring-4 ring-indigo-200/50 shadow-indigo-200/25' : ''}
      `}>
        <form onSubmit={handleSubmit} className="h-full">
          <div className="relative h-full flex items-center">
            {/* Search Button */}
            {searchQuery && (
              <button
                type="submit"
                className={`
                  ml-2 ${size === 'sm' ? 'p-1.5' : size === 'md' ? 'p-2' : 'p-2.5'}
                  rounded-full
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  hover:from-indigo-600 hover:to-purple-600
                  text-white shadow-lg hover:shadow-xl
                  transform transition-all duration-200
                  hover:scale-110 active:scale-95
                  opacity-0 animate-fade-in
                `}
                style={{
                  animation: 'fadeIn 0.3s ease-out forwards'
                }}
              >
                <svg 
                  className={iconSizes[size]} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5M18 12H6" />
                </svg>
              </button>
            )}
            
            {/* Input Field */}
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={placeholder}
              className={`
                flex-1 h-full px-4 bg-transparent
                text-gray-800 placeholder-gray-400
                border-0 outline-none text-right
                ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}
                font-medium
              `}
            />

            {/* Spacer for icon */}
            <div className={`${size === 'sm' ? 'w-10' : size === 'md' ? 'w-12' : 'w-14'}`}></div>
          </div>
        </form>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 rounded-full opacity-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse"></div>
      </div>

      {/* Glow Effect */}
      {(isHovered || isFocused) && (
        <div className={`
          absolute right-0 top-0
          ${sizeClasses[size]}
          rounded-full
          bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-pink-200/40
          blur-xl -z-10
          animate-pulse
        `}></div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}