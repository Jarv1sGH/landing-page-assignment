
"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import testimonials from "../../../data/testimonials.json";

const DynamicImage = dynamic(() => import('next/image'));
const TestimonialsSectionInfo = () => {
    const [user, setUser] = useState<number>(0);
    // let usernameArray = [
    //     'Nick Jonas',
    //     'Regina Phalange',
    //     'Mike Wazowski',
    //     'Ken Adams',
    //     'Taserface'
    // ];
    const onImageClick = (index: number) => {
        setUser(index);
    }
    return (
        <div className="features">
            <div className="featureWrapper">
                <p style={{ "width": "440px", "marginBottom": "24px" }} className="sectionTextBold">{testimonials.testimonials[user].title}</p>
                <p className="sectionText">
                    {testimonials.testimonials[user].description}
                </p>
                <div className="userImages">
                    {
                        testimonials.testimonials.map((item, index) => (
                            <div key={item.username} onClick={() => { onImageClick(index) }} className={index === user ? 'selectedUser' : 'imageWrapper'} >
                                <DynamicImage title={item.username} className='userImage' key={index} src={item.userImageLink} fill alt="user" />
                            </div>
                        ))
                    }
                    {/* {
                        usernameArray.map((item, index) => (
                            <div key={item} onClick={() => { onImageClick(index) }} className={index === user ? 'selectedUser' : 'imageWrapper'} >
                                <DynamicImage title={usernameArray[index]} className='userImage' key={index} src={`/assets/user${index + 1}.png`} fill alt="user" />
                            </div>
                        ))
                    } */}

                </div>
                <p className="username">{testimonials.testimonials[user].username}</p>
            </div>
        </div>
    )
}

export default TestimonialsSectionInfo;