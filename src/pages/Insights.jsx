import ArticleCard from '../components/ArticleCard'
import SectionTitle from '../components/SectionTitle'

export default function Insights() {
    return (
        <div className="py-12">
            <SectionTitle title="Insights" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ArticleCard tag={'AI'} title={'Responsible AI for Students'} summary={'Precise steps to use AI responsibly as a learner.'} />
                <ArticleCard tag={'Skill'} title={'Learning Pathways for 2026'} summary={'Which skills are going to matter and how to get them.'} />
                <ArticleCard tag={'Career'} title={'Networking in the Digital Age'} summary={'How to build a network that opens doors.'} />
            </div>
        </div>
    )
}