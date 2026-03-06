'use client';

import { certifications } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center">
          Certifications & Credentials
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Industry-recognized certifications validating expertise in blockchain, cryptography, and software development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm">
                    {cert.issuer}
                  </p>
                </div>
                <div className="text-3xl">🏆</div>
              </div>

              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                <div>
                  <p className="text-xs text-gray-500">Issued</p>
                  <p className="text-sm font-semibold text-gray-300">
                    {cert.issueDate}
                  </p>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition duration-300"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 border border-blue-700">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-300 mb-4">
            Actively pursuing advanced certifications and staying updated with emerging blockchain technologies, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Web3 Advanced Architectures',
              'Zero-Knowledge Proofs',
              'Consensus Mechanisms',
              'Layer 2 Solutions',
              'Smart Contract Auditing',
              'DeFi Advanced Protocols'
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
