


interface PropsType {
    headline?: string;
    Icon: React.ComponentType;
    advantage: string;
    description: string;
}
const AdvantageSectionInfo: React.FC<PropsType> = ({ advantage, Icon, headline, description }) => {
    return (
        <div className="features">
            {
                headline !== undefined &&
                <>
                    <p className='featureHeadline'>Advantages</p>
                    <p className='sectionBoldHeaderText'>{headline}</p>
                </>
            }

            <div className="featureWrapper">
                <div className="advantageInner">
                    <div className="bellIcon">
                        <Icon />
                    </div>
                    <p className="sectionTextBold">{advantage}</p>
                </div>
                <p className="sectionText">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AdvantageSectionInfo