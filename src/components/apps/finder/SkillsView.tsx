import { MY_SKILLS } from "@/data/finder";

const SkillsView = () => {
  return (
    <div className="space-y-6">
      {MY_SKILLS.map(({ category, skills }) => (
        <div key={category} className="">
          <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {category}
          </h3>
          <div className="grid grid-cols-7">
            {skills.map(({ label, icon }) => (
              <div className="flex flex-col gap-2 items-center">
                <div className="w-16">
                  <img
                    draggable={false}
                    src={`src/assets/files/${icon}`}
                    alt={`${label} icon`}
                  />
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsView;
