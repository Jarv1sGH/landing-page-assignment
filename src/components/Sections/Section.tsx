import Image from 'next/image';
import '../../styles/Section.css';

interface SectionProps {
    orientation: 'left' | 'right';
    src: string;
    sectionInfo: React.ReactNode;
}

const SectionImage: React.FC<{ src: string }> = ({ src }) => {
    return (
        <div className="featureAppScreen">
            <Image className='featuresMockup' src={src} alt='icon' width={550} height={550} />
        </div>
    )
}


const Section: React.FC<SectionProps> = ({ orientation, src, sectionInfo }) => {
    return (
        <section className={orientation === 'right' ? 'featureSection sectionContainer' : 'featureSection sectionContainer flex-Reverse'}>
            <SectionImage src={src} />
            {sectionInfo}

        </section>

    )
}

export default Section;