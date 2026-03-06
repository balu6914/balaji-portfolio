'use client';

import { projects } from '@/data/projects';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['blockchain', 'bigdata', 'fullstack', 'dapp'];
  const categoryLabels: Record<string, string> = {
    blockchain: 'Blockchain',
    bigdata: 'Big Data',
    fullstack: 'Full Stack',
    dapp: 'dApps'
  };

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section id="projects" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Showcase of selected projects demonstrating expertise in blockchain, big data, and full-stack development
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition duration-300 h-full flex flex-col">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 border-b border-slate-700">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 text-sm font-semibold rounded-full mb-3">
                    {categoryLabels[project.category]}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">{project.year}</p>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow">
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">
                      Results:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-slate-700 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-3 py-1 bg-slate-700 text-gray-400 rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/50">
                  <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition duration-300">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
