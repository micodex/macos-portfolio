import { useEffect, useState } from "react";
import { ControlItem } from "./controls.config";
import { audio } from "@/lib/music";

// slider control (4x1)
const SliderControl = ({ data }: { data: ControlItem }) => {
  const [val, setVal] = useState(data.defaultValue || 50);
  const Icon = data.icon;

  useEffect(() => {
    // initial volume
    if (data.id === "sound") {
      audio.volume = val / 100;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    setVal(newVal);

    // handle change for audio slider
    if (data.id === "sound") {
      audio.volume = newVal / 100;
    }
  };
  return (
    <div className="liquid-glass w-full h-16 bg-black/10 rounded-3xl p-3">
      <div className="flex mb-1 px-2">
        <span className="text-xs font-bold text-white">{data.label}</span>
      </div>
      <div className="flex items-center">
        <div className="flex-none px-2 text-gray-100">
          {Icon ? <Icon size={16} /> : null}
        </div>

        <div className="relative h-2 flex-1 bg-black/20 rounded-full overflow-hidden flex items-center group">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white"
            style={{ width: `${val}%` }}
          />

          <input
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={handleChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex-none px-2 text-gray-100">
          {Icon ? <Icon size={16} /> : null}
        </div>
      </div>
    </div>
  );
};

export default SliderControl;
