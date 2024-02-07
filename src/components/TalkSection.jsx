import Button from './Button'
import './TalkSection.css'

const TalkSection = () => {
    return (
        <section id="talk">
            <div className="talk-section">
                <div className="talk-img">
                    <img src="/talk.svg" alt="Talk Me" />
                </div>
                <h3 className="heading-secondary">Need to grow your socials?</h3>
                <p className="paragraph">Fuel your brand and drive results with industry-leading content creation team.</p>
                <Button className="talk-btn" link="#" name="Contact Me" />
            </div>

        </section>
    )
}

export default TalkSection