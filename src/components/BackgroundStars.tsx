import { Star, StarTiltLeft, StarTiltRight } from "@/components/BackGroundStar";

const BackgroundStars = () => {
    return (
        <>
            <Star top={57} right={57} />
            <StarTiltLeft top={116} left={46} />
            <StarTiltLeft top={569} left={281} />
            <StarTiltRight top={613} right={586} />
            <Star top={2600} right={240} />
            <Star top={3610} right={637} />
            <StarTiltLeft top={4560} left={48} />
            <Star top={4355} right={53} />
            <StarTiltLeft top={3400} left={48} />
            <StarTiltLeft top={2130} left={640} />
        </>
    )
}

export default BackgroundStars