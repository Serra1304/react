import React, { useState, useEffect } from 'react'
import ImgLogoG from '../assets/logo_g'
import ImgLogoDivisor from '../assets/logo_divisor'
import ImgLogoGtorres from '../assets/logo_gtorres'
import ImgLogoDeveloper from '../assets/logo_developer'
import '../css/LogoAimation.css'

export default function LogoAnimation() {

    const [showLogo, setShowLogo] = useState(false);
    const [showLogoOut, setShowLogoOut] = useState(false);

    useEffect(() => {
        const delayShowLogoOut = setTimeout(() => {
            setShowLogo(true);

            const delayShowLogo = setTimeout(() => {
                setShowLogoOut(true);
            },10000);
            return () => clearTimeout(delayShowLogo);
        }, 2000)        
        return () => clearTimeout(delayShowLogoOut);
    }, []);

    return (
        <div className={`${showLogoOut ? 'out1' : ''}`}>
            {showLogo && <div className='container-logo'>
                <ImgLogoG className='logoG' />
                <div className={`container-logo ${showLogoOut ? 'out2' : ''}`}>
                    <ImgLogoDivisor className='logoDivisor'/>
                    <div className='subcontainer-logo'>
                        <ImgLogoGtorres className='logoGtorres'/>
                        <ImgLogoDeveloper className='logoDeveloper'/>
                    </div>
                </div>
            </div>}
        </div>
    )
}
