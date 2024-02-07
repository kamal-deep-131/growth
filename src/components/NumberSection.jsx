import './NumberSection.css'

const NumberSection = () => {

    const numberData = [{
        id: 1,
        number: 50,
        text: "Happy clients"
    },
    {
        id: 2,
        number: 100,
        text: "Projects delivered"
    },
    {
        id: 3,
        number: 20,
        text: "Experts"
    },
    {
        id: 4,
        number: 3,
        text: "Years of experience"
    }
    ]


    return (
        <section id="number">
            <h5 className="heading-secondary">Some Numbers of Excellence</h5>
            <div className="number-container">
                {numberData.map((data) => <div className="number-card" key={data.id}>
                    <div className="heading-secondary number">{data.number}+</div>
                    <p className="paragraph">{data.text}</p>
                </div>)}
            </div>
        </section>
    )
}

export default NumberSection