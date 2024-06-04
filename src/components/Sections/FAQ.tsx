"use client";

import React, { useEffect, useState } from 'react';
import '../../styles/Faq.css';
import faqData from "../../../data/faq.json";

interface FaqProps {
    className: string;
    faqTitle: string;
    faqDesc: string;
}
const FAQ: React.FC<FaqProps> = ({ className, faqTitle, faqDesc }) => {
    return (
        <div className={className}>
            <p> {faqTitle}</p>
            <p>{faqDesc}</p>
        </div>
    )
}

const FAQSection = () => {
    const [coloredFaqs, setColoredFaqs] = useState<Array<number>>([]);
    const updateColoredFaqs = () => {
        if (window.innerWidth < 790) {
            setColoredFaqs([0, 2, 4]);
        } else {
            setColoredFaqs([0, 3, 4]);
        }
    };

    useEffect(() => {
        updateColoredFaqs();
        window.addEventListener('resize', updateColoredFaqs);
        return () => {
            window.removeEventListener('resize', updateColoredFaqs);
        };
    }, []);
    
    return (
        <section className="sectionContainer">
            <div className="faqContainer">
                <div className="faqHeader">
                    <p className='featureHeadline' >FAQ</p>
                    <p className='sectionBoldHeaderText'>Frequently Asked <br /> Questions</p>
                </div>
                <div className="faqs">
                    {
                        faqData.faqs.map((item, index) => (
                            <FAQ faqDesc={item.answer} faqTitle={item.question} key={index} className={coloredFaqs.includes(index) ? 'faqRed faq' : 'faq'} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQSection;