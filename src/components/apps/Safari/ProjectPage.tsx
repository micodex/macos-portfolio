import ImageSkeleton from "@/components/ui/ImageSkeleton";
import { type Project } from "@/data/finder";

const ProjectPage = ({ project }: { project: Project }) => (
  <div className="h-full bg-white overflow-auto py-10">
    {/* Hero Header */}
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-xl">
          {project.title}
        </h1>
        <p className="opacity-80 max-w-md mx-auto">{project.desc}</p>
      </div>
      {/* Project Screenshot */}
      <div className="relative w-200">
        <ImageSkeleton
          src={project.image}
          alt={`${project.title} screenshot`}
          className="aspect-video"
        />
      </div>
    </div>

    {/* Content Mockup */}
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex gap-2 mb-8 justify-center">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 border border-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
      </div>
    </div>
  </div>
);

export default ProjectPage;
