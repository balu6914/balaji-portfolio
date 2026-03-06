import { contactInfo, socialLinks } from '@/data/social';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">BC</span>
              </div>
              <span className="font-bold text-white">Balaji Chintam</span>
            </div>
            <p className="text-gray-400 text-sm">
              Senior Blockchain Developer specializing in Web3 solutions and decentralized systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">
                Home
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">
                Projects
              </Link>
              <Link href="/#skills" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">
                Skills
              </Link>
              <Link href="/#experience" className="text-gray-400 hover:text-blue-400 text-sm transition duration-300">
                Experience
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm hover:text-blue-400 transition duration-300 cursor-pointer">
                Blockchain Development
              </li>
              <li className="text-gray-400 text-sm hover:text-blue-400 transition duration-300 cursor-pointer">
                Smart Contract Auditing
              </li>
              <li className="text-gray-400 text-sm hover:text-blue-400 transition duration-300 cursor-pointer">
                DeFi Solutions
              </li>
              <li className="text-gray-400 text-sm hover:text-blue-400 transition duration-300 cursor-pointer">
                Consulting
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 transition duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <p className="text-gray-400 text-sm mb-4">Connect with me:</p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                aria-label={link.name}
                title={link.name}
              >
                <span className="text-xl">{getSocialIcon(link.icon)}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} Balaji Chintam. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
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
