import Button from './Button'
import './Hero.css'

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-info">
                <h1>Social media <br /> posts that get clicks!</h1>
                <p>Driving traffic to your site just got easier. Get compelling SEO blog and social media posts handcrafted with love.</p>
                <Button link="#" name="Book a Call" />
            </div>
            <div className="hero-img">
                <img src="/hero.svg" alt="hero" />
            </div>
        </section>
    )
}

export default Hero