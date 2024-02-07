import "./ReviewSection.css"


const ReviewSection = () => {

    const review = [{
        id: 1,
        reviewImg: "/review1.png",
        review: "Growth excels at creating industry content without needing to rely on our internal expertise. The quality of their work just gets better and better with each new deliverable.",
        reviewer: "Seren Singh",
        reviewerJob: "Founder @Coiny"
    },
    {
        id: 2,
        reviewImg: "/review2.png",
        review: "Growth shows creativity not just in the project, but in the process itself. There is a synergy between our companies that’s almost cultural.",
        reviewer: "Adelina Petty",
        reviewerJob: "Founder @Drop"

    },
    {
        id: 3,
        reviewImg: "/review3.png",
        review: "The Growth team went above and beyond our expectations. They helped us grow our Twitter from 0 to 10k followers.",
        reviewer: "Sunita Verma",
        reviewerJob: "Founder @Excelio"
    }
    ]

    return (
        <section id="review">
            <h2 className="heading-secondary">What Our Clients Are Saying</h2>
            <div className="review-container">
                {review.map((data) =>
                    <div className="review-card" key={data.id}>

                        <p className="paragraph">
                            {data.review}
                        </p>
                        <div className="reviewer-container">
                            <div className="reviewImg" >
                                <img src={data.reviewImg} alt={`review${data.id}`} />
                            </div>
                            <div className="reviewer-info">
                                <div className="reviewer-name">{data.reviewer}</div>
                                <div className="reviewer-job paragraph">{data.reviewerJob}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </section>
    )
}

export default ReviewSection