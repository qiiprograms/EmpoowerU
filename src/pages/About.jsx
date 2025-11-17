export default function About() {
    return (
        <div className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <section className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                    About <span className="text-primary">EmpowerU</span>
                </h1>

                <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
                    EmpowerU is a futuristic learning collective dedicated to preparing youth
                    for the digital future through accessible, practical, and impactful education.
                </p>

                <p className="mt-2 text-primary/70 text-sm tracking-wide">
                    Empowering the next generation one skill at a time.
                </p>
            </section>

            <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-primary/60 to-transparent mx-auto mt-8 mb-10" />

            <section className="panel p-8 rounded-2xl mt-10 bg-[#060a13]/60 backdrop-blur-md border border-[#0a1120]/70">
                <h2 className="font-heading text-2xl text-white">
                    Our Mission
                </h2>

                <p className="mt-3 text-slate-300 leading-relaxed">
                    To empower young people with digital, creative, and leadership skills that
                    unlock real opportunities in the modern world. We focus on:
                </p>

                <ul className="mt-4 text-slate-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-primary text-lg">•</span>
                        AI literacy and future technology awareness.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary text-lg">•</span>
                        Digital creation, innovation, and problem-solving.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary text-lg">•</span>
                        Leadership, confidence, and community impact.
                    </li>
                </ul>

                <p className="mt-4 text-slate-300 leading-relaxed">
                    Through hands-on learning, mentorship, and real-world challenges,
                    every learner builds portfolio-ready outcomes and gains practical experience
                    that prepares them for the next decade.
                </p>
            </section>

        </div>
    )
}
