import TestimonialCard from '../components/TestimonialCard'
import SectionTitle from '../components/SectionTitle'

export default function Stories() {
    return (
        <div className="py-12">
            <SectionTitle title="Inspiration Stories" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard name={'Alya'} story={'Built an edtech prototype after our bootcamp.'} impact={'Startup grant winner'} />
                <TestimonialCard name={'Rafi'} story={'Secured a remote role at an NGO through portfolio work.'} impact={'Remote hire'} />
            </div>
        </div>
    )
}