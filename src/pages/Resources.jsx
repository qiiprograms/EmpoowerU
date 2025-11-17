import FeatureCard from "../components/FeatureCard"
import ArticleCard from "../components/ArticleCard"
import ProgramCard from "../components/ProgramCard"

export default function Resources() {
    return (
        <div className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <section className="text-center">
                <h1 className="font-heading text-4xl md:text-5xl text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                    Resources
                </h1>
                <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
                    A curated collection of guides, tools, templates, and learning materials
                    to accelerate your journey into the digital future.
                </p>
            </section>

            <div className="w-28 h-0.5 bg-linear-to-r from-transparent via-primary/60 to-transparent mx-auto mt-8" />

            <section className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                <FeatureCard
                    icon="📄"
                    title="CV Resources"
                    text="Templates, tips, and examples to help you build a strong CV."
                />
                <FeatureCard
                    icon="🎤"
                    title="Interview Help"
                    text="Guides, frameworks, and practice questions."
                />
                <FeatureCard
                    icon="🤖"
                    title="AI Tools"
                    text="Beginner-friendly tools with simple how-to guides."
                />
                <FeatureCard
                    icon="🎓"
                    title="Learning Platforms"
                    text="Curated MOOC lists and skill-learning roadmaps."
                />
            </section>

            <section className="mt-12">
                <h2 className="font-heading text-2xl text-white">Featured Resources</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProgramCard
                        title="CV Templates"
                        desc="Downloadable CV templates designed for students and beginners."
                        level="Beginner"
                    />

                    <ProgramCard
                        title="Interview Guides"
                        desc="Tips, structures, and real interview question samples."
                        level="All Levels"
                    />

                    <ProgramCard
                        title="AI Tools & Tutorials"
                        desc="Simple breakdowns on using AI tools for learning and productivity."
                        level="Beginner"
                    />
                </div>
            </section>

            <section className="mt-12">
                <h2 className="font-heading text-2xl text-white">Useful Insights</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ArticleCard
                        tag="Career"
                        title="How to Build a Strong CV"
                        summary="Start with your impact, not just your experience. Here’s how."
                    />
                    <ArticleCard
                        tag="Skills"
                        title="Top Platforms to Learn Digital Skills"
                        summary="A curated list of learning platforms that help you grow fast."
                    />
                    <ArticleCard
                        tag="AI"
                        title="Beginner-Friendly AI Tools"
                        summary="Easy tools you can use daily to boost learning and creativity."
                    />
                </div>
            </section>

        </div>
    )
}
