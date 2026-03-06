import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categoriesMap: Record<string, string> = {
  blockchain: 'Blockchain',
  bigdata: 'Big Data',
  fullstack: 'Full Stack',
  dapp: 'dApps'
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Balaji Chintam`,
    description: project.longDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage(props: PageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/projects"
          className="text-blue-400 hover:text-blue-300 font-semibold mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 text-sm font-semibold rounded-full mb-4">
            {categoriesMap[project.category]}
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg">{project.year}</p>
        </div>

        {/* Main Content */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden mb-12">
          {/* Overview */}
          <div className="p-8 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-300 inline-flex items-center gap-2"
                >
                  🐙 GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 inline-flex items-center gap-2"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Challenges */}
          <div className="p-8 border-b border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Challenges</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Solutions */}
          <div className="p-8 border-b border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {project.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="p-8 border-b border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Results & Impact</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4 border border-blue-700"
                >
                  <p className="text-gray-200">{result}</p>
                </div>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-700 text-blue-300 rounded-full font-semibold border border-slate-600 hover:border-blue-500 transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group"
                >
                  <div className="bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition duration-300 p-6 h-full flex flex-col">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 text-sm font-semibold rounded-full mb-3 w-fit">
                      {categoriesMap[relatedProject.category]}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition duration-300 mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm flex-grow mb-4">
                      {relatedProject.description}
                    </p>
                    <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition duration-300">
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
