import "./ServicesSection.css"

const ServicesSection = () => {

    const serviceData = [
        {
            id: 1,
            serviceImage: "/service1.svg",
            heading: "Tech Optimization",
            content: "A list of technical changes and optimizations that help your site meet the requirements set by search engines like Google."
        },
        {
            id: 2,
            serviceImage: "/service2.svg",
            heading: "Social Media",
            content: "Every story we craft for your social media channels serves a purpose and is planned out to meet your business requirements."
        },
        {
            id: 3,
            serviceImage: "/service3.svg",
            heading: "Content Strategy",
            content: "Our team of content writers and SMEs create compelling content through blog posts to drive Traffic and Conversions."
        }
    ]

    return (
        <section id='section'>
            <h2 className='section-heading'>How We Can Help You?</h2>
            <p className="paragraph service-paragraph">We create compelling SEO blog post & social media Content that drives the right people to your site.</p>
            <div className="service-card-container">
                {
                    serviceData.map((data) => <div className="service-card" key={data.id}>
                        <img src={data.serviceImage} alt={data.heading} />
                        <h3>{data.heading}</h3>
                        <p className="paragraph">{data.content}</p>
                    </div>)
                }

            </div>
        </section>
    )
}

export default ServicesSection