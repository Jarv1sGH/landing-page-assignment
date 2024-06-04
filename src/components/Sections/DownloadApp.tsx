import Image from "next/image"
import '../../styles/DownloadApp.css';
import { AppleIcon } from "../Customicons";

const DownloadApp = () => {
    return (
        <div className=" downloadApp">
            <Image src={'/assets/bottomFrame.png'} alt="frame" width={1090} height={505} />
            <div className="downloadAppBtnWrapper">
                <p className="sectionBoldHeaderText">Ready To Get Started?</p>
                <p className="downloadText">Click the button below to download the app <br />from Appstore</p>
                <button>
                    Download App <AppleIcon />
                </button>
            </div>
        </div>
    )
}

export default DownloadApp;