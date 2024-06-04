
import Image from "next/image"
import TestimonialsSectionInfo from "../SectionInfo/TestimonialsSectionInfo"
import testimonials from "../../../data/testimonials.json";

const TestimonialSection = () => {
    return (
        <section className='testimonialSection sectionContainer'>
            <div>
                <div className="testimonialHeader">
                    <p>TESTIMONIALS</p>
                    <p className='sectionBoldHeaderText testomonialText' >{testimonials.headline}</p>
                </div>
            </div>
            <div className="featureSection">
                <div className="featureAppScreen">
                    <Image className='featuresMockup' src={'/assets/users.png'} alt='icon' width={550} height={550} />
                </div>
                <TestimonialsSectionInfo />

            </div>
        </section>
    )
}

export default TestimonialSection;