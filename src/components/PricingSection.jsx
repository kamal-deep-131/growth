import Button from "./Button"
import "./Pricing.css"

const PricingSection = () => {

    const pricingData = [{
        id: 1,
        pricingName: "Basic",
        price: 249,
        services: [
            "10 Blog Articles",
            "Keyword Research",
            "700+ words",
            "SEO friendly"
        ]
    },
    {
        id: 2,
        pricingName: "Business",
        price: 449,
        services: [
            "20 Blog Articles",
            "Keyword Research",
            "1000+ words",
            "SEO friendly",
            "Content Marketing",
            "Traffic Assurance",
            "24*7 Chat Support"
        ]
    },
    {
        id: 3,
        pricingName: "Custom",
        services: [
            "For all your custom needs",
            "Social Media Content (starting from $200)"
        ]
    }]

    return (
        <section id="pricing">
            <h3 className="heading-secondary">Plans for every need</h3>
            <p className="paragraph">You can cancel anytime.</p>
            <div className="pricing-table">
                {
                    pricingData.map((data) => <div className="pricing-plan" key={data.id}>
                        <h3>{data.pricingName}</h3>
                        <p className="paragraph">{data.price ? `$${data.price}/month` : "Get a quote"}</p>
                        <Button link="#" name="Let's Talk" />
                        <ul>
                            {
                                data.services.map((benifit, index) => <li className="paragraph" key={index}>{benifit}</li>)
                            }
                        </ul>
                    </div>)
                }

            </div>
        </section>
    )
}

export default PricingSection