import React from 'react';

export default function TestimonialCard({ name, story, impact }) {
    return (
        <div
            className="
                group relative bg-[#060a13]/70 backdrop-blur-md
                border border-[#0a1120] rounded-2xl p-6
                transition-all duration-500
                hover:-translate-y-2 hover:border-[#00e5ff40]
                hover:shadow-[0_0_25px_#00e5ff30]
            "
        >

            <div
                className="
                    absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition-opacity duration-500
                    bg-linear-to-br from-[#00e5ff10] to-transparent
                    pointer-events-none
                "
            />

            <div className="flex items-center gap-4 relative">

                <div
                    className="
                        w-14 h-14 rounded-full flex items-center justify-center
                        bg-[#0c1625] border border-[#123]
                        group-hover:border-[#00e5ff40]
                        transition-all duration-500
                        shadow-[0_0_0px_#00e5ff00] 
                        group-hover:shadow-[0_0_15px_#00e5ff40]
                    "
                >
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#00e5ff30] to-[#a855f740]" />
                </div>

                <div>
                    <div className="text-white font-semibold text-lg leading-tight">
                        {name}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 tracking-wide">
                        {impact}
                    </div>
                </div>
            </div>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {story}
            </p>
        </div>
    );
}
