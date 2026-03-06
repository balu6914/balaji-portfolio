'use client';

import { skills } from '@/data/skills';

export default function SkillsSection() {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-emerald-900 text-emerald-200 border-emerald-700';
      case 'advanced':
        return 'bg-blue-900 text-blue-200 border-blue-700';
      case 'intermediate':
        return 'bg-amber-900 text-amber-200 border-amber-700';
      default:
        return 'bg-gray-700 text-gray-200';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-4/5';
      case 'intermediate':
        return 'w-3/5';
      default:
        return 'w-1/2';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          12+ years of experience across blockchain, big data, cloud computing, and full-stack development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {skillGroup.category}
              </h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.yearsOfExperience}y
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-600 rounded-full h-2">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${getProficiencyWidth(
                            skill.proficiency
                          )}`}
                        ></div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded border ${getProficiencyColor(
                          skill.proficiency
                        )}`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 border border-blue-700">
          <h3 className="text-2xl font-semibold text-white mb-4">Key Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Smart Contract Development',
              'DeFi Protocol Design',
              'Web3 Integration',
              'Blockchain Architecture',
              'Full-Stack Development',
              'System Design',
              'Team Leadership',
              'Security Auditing',
              'Gas Optimization'
            ].map((competency) => (
              <div
                key={competency}
                className="flex items-center gap-2"
              >
                <span className="text-blue-400">✓</span>
                <span className="text-gray-200">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
