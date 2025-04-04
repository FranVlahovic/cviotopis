export default function Header({ logo, text, image, altText, link }) {
    return (
        <header className="header">
            <h1 className="header-logo">{logo}</h1>
            <a className="header-link" href={link} target="_blank" rel="noopener noreferrer">
                {text}
                <img src={image} alt={altText} className="header-link" />
            </a>
        </header>
    );
}
