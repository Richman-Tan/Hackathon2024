import React, { useState } from "react";
import { ElfCardProps } from "../../utils/FrontendTypes";

export default function ElfCard({ elf }: ElfCardProps) {
  const { name, image, chatbox } = elf;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-72 flex flex-col bg-green-200 rounded-3xl overflow-hidden shadow-lg">
      <div className="relative h-4/5">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="h-1/5 bg-green-300 flex items-center justify-center text-green-900 font-bold text-xl">
        {name}
      </div>

      <div 
        className={`bg-white p-2 border-t border-green-400 transition-all ${
          expanded ? "h-auto" : "h-10 overflow-hidden cursor-pointer"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <p className={`${expanded ? "" : "truncate"}`}>{chatbox}</p>
        {!expanded && <p className="text-gray-500 text-sm">Click to expand</p>}
      </div>
    </div>
  );
}

