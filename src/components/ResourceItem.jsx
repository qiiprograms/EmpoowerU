export default function ResourceItem({ label }) {
    return (
        <div className="
            bg-[#060a13]/80 border border-[#0a1120] p-4 rounded-xl text-slate-200 text-sm
            hover:border-[#00e5ff40] hover:shadow-[0_0_20px_#00e5ff20]
            transition-all duration-300 cursor-pointer text-center
        ">
            {label}
        </div>
    )
}