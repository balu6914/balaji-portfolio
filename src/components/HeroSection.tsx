'use client';

import { contactInfo, socialLinks } from '@/data/social';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BC
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          {contactInfo.name}
        </h1>

        <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-4">
          {contactInfo.title}
        </p>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {contactInfo.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition duration-300"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
              aria-label={link.name}
            >
              <span className="text-2xl">{getSocialIcon(link.icon)}</span>
            </a>
          ))}
        </div>

        <div className="text-gray-400 text-sm">
          <p>{contactInfo.location} • {contactInfo.phone}</p>
          <p>{contactInfo.email}</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function getSocialIcon(icon: string): string {
  const icons: Record<string, string> = {
    linkedin: '🔗',
    github: '🐙',
    email: '📧',
    twitter: '𝕏'
  };
  return icons[icon] || '•';
}
