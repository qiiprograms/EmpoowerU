
import ProgramCard from '../components/ProgramCard'
import SectionTitle from '../components/SectionTitle'


export default function Programs() {
    return (
        <div className="py-12">
            <SectionTitle title="Program / Skill Modules" />
            <p className="text-slate-300 mt-2">Curated learning paths designed for different levels.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <ProgramCard title={'Full-stack Web'} desc={'React, Node.js, databases, deployment.'} level={'Intermediate'} />
                <ProgramCard title={'AI Foundations'} desc={'Intro to machine learning and responsible AI.'} level={'Advanced'} />
                <ProgramCard title={'Creative Tech'} desc={'Digital art, video, motion & AR prototypes.'} level={'Beginner'} />
            </div>
        </div>
    )
}