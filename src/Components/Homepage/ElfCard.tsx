import React, { useState } from "react";
import { ElfCardProps } from "../../utils/FrontendTypes";

export default function ElfCard({ elf }: ElfCardProps) {
  const { name, image, chatbox } = elf;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="w-40 flex flex-col rounded-3xl overflow-hidden shadow-md"
      style={{ backgroundColor: "#CAD7BE" }}
    >
      <div className="relative h-4/5">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div
        className="h-1/5 flex items-center justify-center text-green-900 font-bold text-xl p-3"
        style={{ backgroundColor: "#CAD7BE" }}
      >
        {name}
      </div>

      <div className="bg-white p-3 border-t border-green-400">
        <p className="truncate">{chatbox}</p>
      </div>
    </div>
  );
}
