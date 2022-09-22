import React from 'react'
import './LandingPageStyle.css'
import LandingImage from '../assets/Landing page image.svg'
import  { useNavigate} from 'react-router-dom'

export default function LandingPage() {

    const navigate = useNavigate();
  return (
    <div className='background'>
        <main className='container'>

        <div className="hero">
            <div className="hero-text">
                <h1>Imagine if</h1>
                <h1 className='snapchat'>Snapchat</h1>
                <h1>had events.</h1>
                <p className='hero-text2'>Easily host and share events with your friends across any social media.</p>
            </div>
            <div className="hero-img">
                <img src={LandingImage} alt=""  class="mockup"/>

            </div>
            </div>
           

            <button className='btn text'  onClick={() => navigate('/event')}>
                    <p>🎉 Create my event</p>
            </button>
            <div class="socials">
            
			<button class="social-btn facebook"></button>
			<button class="social-btn twitter"></button>
			<button class="social-btn instagram"></button>
		</div>
        </main>
    </div>
  )
}
