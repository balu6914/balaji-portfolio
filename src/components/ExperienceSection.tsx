'use client';

import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center">
          Work Experience
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          12+ years of progressive career growth in blockchain development, big data, and full-stack engineering
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-20 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-2 top-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-600 border-4 border-slate-800"></div>

              {/* Content */}
              <div className="ml-16 sm:ml-20 bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 sm:mt-0 text-right">
                    <p className="font-semibold">{exp.duration}</p>
                    <p className="text-xs text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.slice(0, 5).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="text-blue-400 mr-3 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                    {exp.highlights.length > 5 && (
                      <li className="text-sm text-gray-400">
                        + {exp.highlights.length - 5} more achievements
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-600">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-slate-600 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
