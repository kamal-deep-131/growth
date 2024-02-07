import "./AboutSection.css"

const AboutSection = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-img">
                    <img src="/about.png" alt="about" />
                </div>
                <div className="about-info">
                    <h3>Need help creating high quality content?</h3>
                    <p className="paragraph">We're known for Content Strategy and Content Creation.
                        Get super rich content experience in blog & social media post, drive traffic and improve outcomes by as much as 59%. Increase search exposure, build brand awareness and attract top-of-funnel visitors with blog posts created by our in-house team of content marketers.
                        We develop engaging, high-quality content that's personalized for your target audience and optimized for search engines.
                    </p>
                    <a href="#" className="btn btn-Sceondary">View testimonials<i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection