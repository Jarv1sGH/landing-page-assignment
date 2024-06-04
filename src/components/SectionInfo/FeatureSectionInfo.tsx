import { CubeIcon, PinWheelIcon, SparkleIcon } from '../Customicons';
import featureData from '../../../data/features.json';
interface FeatureProps {
    Icon: React.ComponentType;
    featureTitle: string;
    feature: string;
}
const Feature: React.FC<FeatureProps> = ({ Icon, featureTitle, feature }) => {
    return (
        <div className='featureWrapper'>
            <div> <Icon /> <p className='featureTitle'>{featureTitle}</p></div>
            <p className='sectionText'>
                {feature}
            </p>
        </div>
    )
}
const FeatureSectionInfo = () => {
    return (
        <div className="features">
            <p className='featureHeadline'>Features</p>
            <p className='sectionBoldHeaderText'> {featureData.headline}</p>
            <div className="featuresInner">
                {
                    featureData.features.map((item, index) => (
                        <Feature key={index} Icon={SparkleIcon} featureTitle={item.title} feature={item.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeatureSectionInfo;