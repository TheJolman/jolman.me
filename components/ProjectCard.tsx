interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  liveLink?: string;
  githubLink: string;
}

export default function ProjectCard(
  { title, description, technologies, liveLink, githubLink }: ProjectCardProps,
) {
  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-200">
      <h3 class="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p class="text-gray-700 mb-4">{description}</p>
      <p class="text-sm text-gray-600 mb-4 italic">{technologies}</p>

      <div class="flex flex-wrap gap-2">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            🌐 Live Demo
          </a>
        )}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
        >
          📁 GitHub
        </a>
      </div>
    </div>
  );
}
