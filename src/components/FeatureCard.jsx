export default function FeatureCard({ icon, title, text }) {
    return (
        <div
            className="
                group relative bg-[#060a13]/80 backdrop-blur-md
                border border-[#0a1120] rounded-2xl p-6
                transition-all duration-500
                hover:-translate-y-2 hover:border-[#00e5ff]/40 
                hover:shadow-[0_0_25px_#00e5ff30]
            "
        >

            <div
                className="
                    absolute inset-0 rounded-2xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500
                    bg-linear-to-br from-[#00e5ff15] to-transparent
                    pointer-events-none
                "
            />

            <div className="flex items-start gap-5 relative">
                <div
                    className="
                        w-14 h-14 flex items-center justify-center rounded-xl
                        border border-[#0f1629] bg-[#06101f]/50
                        text-[#00e5ff] text-xl
                        transition-all duration-500
                        group-hover:shadow-[0_0_18px_#00e5ff50]
                        group-hover:border-[#00e5ff40]
                    "
                >
                    {icon}
                </div>

                <div className="flex-1">
                    <h4 className="text-white font-semibold text-xl tracking-wide">
                        {title}
                    </h4>

                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}
