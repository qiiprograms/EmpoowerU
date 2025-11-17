export default function ArticleCard({ tag, title, summary }) {
    return (
        <div
            className="
                group relative bg-[#060a13]/70 backdrop-blur-sm
                border border-[#0a1120] rounded-xl p-5
                transition-all duration-500
                hover:-translate-y-2 hover:border-[#00e5ff40]
                hover:shadow-[0_0_20px_#00e5ff25]
            "
        >

            <div
                className="
                    absolute inset-0 rounded-xl opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500
                    bg-linear-to-br from-[#00e5ff10] to-transparent
                    pointer-events-none
                "
            />

            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold 
                            bg-[#00e5ff15] text-[#00e5ff] border border-[#00e5ff30] 
                            tracking-wide uppercase">
                {tag}
            </div>

            <h4 className="mt-3 text-white font-semibold text-lg leading-snug group-hover:text-[#00e5ff] transition-colors">
                {title}
            </h4>

            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {summary}
            </p>
        </div>
    );
}
