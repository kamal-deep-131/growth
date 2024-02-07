import "./Button.css"
const Button = ({ link, name }) => {
    return (
        <a className="btn" href={link}>{name}<i className='bx bx-right-arrow-alt'></i></a>
    )
}

export default Button
