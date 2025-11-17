export default function SectionTitle({ title }) {
    return (
        <div className="mt-16">
            <h3 className="font-heading text-2xl text-white relative inline-block pb-3">
                {title}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00e5ff] rounded-full opacity-80"></div>
            </h3>
        </div>
    )
}