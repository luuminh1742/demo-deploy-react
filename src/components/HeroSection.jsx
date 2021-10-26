import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './HeroSection.css'
import {AiFillPlayCircle} from 'react-icons/ai'

function HeroSection() {

    const [showVideo, setShowVideo] = useState(true);


    const handlerShowVideo = () => {
        setShowVideo(!showVideo)
    }


    return (
        <div className={`hero-container ${showVideo && 'bg-hero-container'}`}>

            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className='hero-btns'>

                <button onClick={handlerShowVideo}
                    className='btn-play'
                    style={{width:55,height:55}}
                >
                    <AiFillPlayCircle style={{fontSize:35}}/>
                    
                </button>
            </div>
            <div class='social-icons' style={{ marginTop: 15 }}>
                <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                >
                    <i class='fab fa-facebook-f' />
                </Link>
                <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                >
                    <i class='fab fa-instagram' />
                </Link>
                <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                >
                    <i class='fab fa-youtube' />
                </Link>
                <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                >
                    <i class='fab fa-twitter' />
                </Link>
                <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <i class='fab fa-linkedin' />
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
