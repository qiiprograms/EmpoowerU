import React from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import ProgramCard from '../components/ProgramCard'
import ArticleCard from '../components/ArticleCard'
import TestimonialCard from '../components/TestimonialCard'
import SectionTitle from '../components/SectionTitle'
import ResourceItem from '../components/ResourceItem'

export default function Home() {
    return (
        <div className="py-16 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

            <Hero />

            <SectionTitle title="Key Features" />

            <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                <FeatureCard icon={'💻'} title={'Digital Skills'} text={'Hands-on coding, web dev and product thinking.'} />
                <FeatureCard icon={'🗣️'} title={'Youth Empowerment'} text={'Leadership, civic tech and social impact.'} />
                <FeatureCard icon={'🤖'} title={'Future Technology'} text={'AI, ML and emerging tech fundamentals.'} />
                <FeatureCard icon={'🎨'} title={'Creative Innovation'} text={'Design thinking and digital creativity.'} />
            </section>

            <SectionTitle title="Program / Skill Modules" />

            <section className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <ProgramCard title={'Tech & Coding'} desc={'Intro to full-stack, Python, JavaScript and more.'} level={'Intermediate'} />
                    <ProgramCard title={'Digital Creativity'} desc={'Digital art, motion and product prototyping.'} level={'Beginner'} />
                    <ProgramCard title={'Productivity & Career Skills'} desc={'CVs, interviews and portfolio building.'} level={'Beginner'} />
                    <ProgramCard title={'AI Literacy'} desc={'Responsible AI, prompt engineering, tools.'} level={'Advanced'} />
                </div>
            </section>

            <SectionTitle title="Insights" />

            <section className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ArticleCard tag={'AI'} title={'AI for Youth: What to Learn'} summary={'A concise guide to AI skills youth should focus on today.'} />
                    <ArticleCard tag={'Careers'} title={'Building a Future-Ready CV'} summary={'How to craft a CV that highlights impact and learning.'} />
                    <ArticleCard tag={'Design'} title={'Design Thinking in 30 minutes'} summary={'Practical exercises to foster creative problem solving.'} />
                </div>
            </section>

            <SectionTitle title="Inspiration Stories" />

            <section className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TestimonialCard name={'Alya'} story={'Joined our AI bootcamp and built a startup prototype.'} impact={'From student to founder'} />
                    <TestimonialCard name={'Ravi'} story={'Improved his CV and landed a remote internship.'} impact={'Internship success'} />
                    <TestimonialCard name={'Sari'} story={'Learned digital design and now freelances.'} impact={'Freelance growth'} />
                </div>
            </section>

            <SectionTitle title="Resources" />

            <section className="mt-6 bg-[#060a13]/60 border border-[#0a1120] p-8 rounded-2xl backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <ResourceItem label="CV templates" />
                    <ResourceItem label="Interview guides" />
                    <ResourceItem label="AI tools" />
                    <ResourceItem label="Learning platforms" />
                </div>
            </section>

            <section className="mt-14">
                <div className="
                    bg-[#060a13]/70 border border-[#0a1120] backdrop-blur-md 
                    rounded-2xl p-10 text-center 
                    hover:shadow-[0_0_30px_#00e5ff20] transition-all duration-500
                ">
                    <h3 className="font-heading text-3xl text-white">Start Your Journey to the Future</h3>
                    <p className="text-slate-300 mt-2">
                        Join EmpowerU today and shape your future with high-impact skills.
                    </p>

                    <div className="mt-5">
                        <a className="
                            inline-block px-6 py-3 rounded-lg font-semibold text-black 
                            bg-linear-to-r from-[#00e5ff] to-[#0099cc]
                            hover:shadow-[0_0_20px_#00e5ff80]
                            transition-all duration-300 cursor-pointer
                        ">
                            Join EmpowerU
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

