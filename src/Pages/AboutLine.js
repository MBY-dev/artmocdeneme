import React, { useState, useEffect } from 'react';
import "./AboutLine.css";

const AboutLine = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            // Sayfanın ortasını temsil eden scroll değeri
            const middleScroll = windowHeight / 2;

            // Sayfa yüksekliğine göre scroll aralığı hesaplaması
            const startScroll = middleScroll - (windowHeight / 4); // Ekranın ortasına yakın bir aralık
            const endScroll = middleScroll + (windowHeight / 4);   // Ekranın ortasına yakın bir aralık

            if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container-Aline'>
            <div className={isVisible ? 'right-line' : 'right-line-none'}>
                <p className="indented-paragraph">
                    ARTMOC CONDUCTS A METICULOUS WORKING PROCESS THAT IS NECESSARY TO BRING YOUR DREAM PROJECT TO LIFE, MAKING ITS CREATIONS ACCESSIBLE TO EVERYONE. ALL YOU HAVE TO DO IS ALLOW THE ARTIST TO CREATE!
                </p>
            </div>
            <div className={isVisible ? 'right-line-none' : 'right-line'}></div>
        </div>
    );
}

export default AboutLine;