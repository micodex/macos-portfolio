import { useState } from "react";
import { type ControlItem } from "./controls.config";

// circualr control (1x1)
export const CircularControl = ({ data }: { data: ControlItem }) => {
  const [active, setActive] = useState(data.isActive);
  const Icon = data.icon;

  const handleClick = () => {
    setActive(!active);
    if (data.action) data.action();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        liquid-glass h-16 w-16 rounded-full flex items-center justify-center
        ${
          active
            ? "bg-white text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            : "bg-black/10 text-white"
        }
      `}
    >
      {Icon ? <Icon size={24} /> : null}
    </button>
  );
};

// wide control (2x1)
export const WideControl = ({ data }: { data: ControlItem }) => {
  const [active, setActive] = useState(data.isActive);
  const Icon = data.icon;

  const handleClick = () => {
    setActive(!active);
    if (data.action) data.action();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        liquid-glass h-16 w-full rounded-4xl flex items-center px-4 gap-3
        ${active ? "bg-blue-500/10 text-white" : "bg-black/10 text-white"}
      `}
    >
      <div
        className={`
        w-8 h-8 rounded-full flex items-center justify-center
        ${active ? "bg-white text-blue-500" : "bg-black/20"}
      `}
      >
        {Icon ? <Icon size={16} /> : null}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-bold">{data.label}</span>
        <span className="text-[10px] opacity-70">{active ? "On" : "Off"}</span>
      </div>
    </button>
  );
};
