import '../../styles/HeroSection.css';
import Image from 'next/image';
import { PlayIcon, RightArrowIcon } from '../Customicons';
import sectionData from '../../../data/hero.json';

const HeroSection = () => {
    return (
        <section className="heroSection sectionContainer">
            <div className="headlineContainer">

                <Image className='headlineSmudge' src='/assets/headlineSmudge.png' alt='icon' width={457} height={380} />
                <p className='headline'>{sectionData.hero.headline}</p>
                <p className='bottomText'>
                    {sectionData.hero.subheadline}
                </p>
                <div className="actionBtns">
                    <button className='landingPageBtn'>
                        <a href={sectionData.hero.ctaButtons[0].link}>{sectionData.hero.ctaButtons[0].text}</a> <RightArrowIcon />
                    </button>
                    <button className='landingPageBtn2' >
                        <PlayIcon /> <a href={sectionData.hero.ctaButtons[1].link}>{sectionData.hero.ctaButtons[1].text}</a>
                    </button>
                </div>
                <div className="achievementsImage">
                    <Image className='achievements' src='/assets/Achievements.png' alt='icon' width={450} height={345} />
                </div>

            </div>
            <div className="appScreens">
                <Image className='smudge' src='/assets/redSmudge.png' alt='icon' width={400} height={215} />
                <Image className='ellipse' src='/assets/Ellipse.png' alt='icon' width={555} height={555} />
                <Image className='appScreen1' src='/assets/appScreen1.png' alt='icon' width={320} height={505} />
                <Image className='appScreen2' src='/assets/appScreen2.png' alt='icon' width={320} height={505} />
                <Image className='appScreen3' src='/assets/appScreen1.png' alt='icon' width={320} height={505} />
            </div>
        </section>
    )
}

export default HeroSection