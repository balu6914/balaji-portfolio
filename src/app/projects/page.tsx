import { projects } from '@/data/projects';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Balaji Chintam',
  description: 'Portfolio of blockchain, DeFi, big data, and full-stack projects',
};

export default function ProjectsPage() {
  const categoriesMap: Record<string, string> = {
    blockchain: 'Blockchain',
    bigdata: 'Big Data',
    fullstack: 'Full Stack',
    dapp: 'dApps'
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">All Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Complete portfolio of projects spanning blockchain development, DeFi protocols, big data solutions, and full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 border-b border-slate-700">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 text-sm font-semibold rounded-full mb-3">
                    {categoriesMap[project.category]}
                  </span>
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition duration-300 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{project.year}</p>
                </div>

                <div className="p-6 flex-grow">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-blue-400 mb-3">
                      Key Results:
                    </h3>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 mb-3">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-slate-700 text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/50">
                  <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition duration-300">
                    View Full Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
