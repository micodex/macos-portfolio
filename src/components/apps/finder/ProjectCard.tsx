const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col gap-2 p-2 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors duration-200">
      {/* Folder Icon / Thumbnail */}
      <img
        src="src/assets/images/folder.png"
        alt="folder icon"
        draggable={false}
        className="block w-30"
      />

      {/* Text Info */}
      <div className="flex flex-col ml-2">
        <span className="text-sm font-semibold text-gray-700 truncate group-hover:text-blue-600">
          {project.title}
        </span>
        <span className="text-xs text-gray-500 line-clamp-2">
          {project.desc}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
