import React from 'react';

export default function ProgramCard({ title, desc, level }) {
    return (
        <div
            className="
        group relative bg-[#060a13]/80 backdrop-blur-md border 
        border-[#0a1120] rounded-2xl p-6
        transition-all duration-500 
        hover:-translate-y-2 hover:border-[#00e5ff]/40 
        hover:shadow-[0_0_25px_#00e5ff40] 
        hover:bg-[#060a13]/90
        flex flex-col h-full
      "
        >

            <div
                className="
          absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100
          transition-opacity duration-500
          bg-linear-to-br from-[#00e5ff20] to-transparent
          pointer-events-none
        "
            />

            <h5 className="text-white font-bold text-xl mb-4 tracking-wide">
                {title}
            </h5>

            <p className="text-slate-400 text-sm flex-1 leading-relaxed">
                {desc}
            </p>

            <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#0f1629]">
                <span className="text-xs text-slate-500">
                    Difficulty:{" "}
                    <span className="text-[#00e5ff] font-semibold">{level}</span>
                </span>

                <a
                    href="/programs"
                    className="
            relative px-5 py-2 text-xs font-semibold rounded-full
            bg-[#00e5ff] text-black
            transition-all duration-300
            hover:shadow-[0_0_15px_#00e5ff80]
            hover:bg-[#00cfe6]
            active:scale-95
          "
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}
