interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  type,
}: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {type && (
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
            {type}
          </span>
        )}
      </div>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}