import AddButton from "./MainButton";

export default function Header({ logo, text, image, altText, link, setLanguage }) {
    return (
        <header className="header">
            <h1 className="header-logo">{logo}</h1>
            <a className="header-link" href={link} target="_blank" rel="noopener noreferrer">
                {text}
                <img src={image} alt={altText} className="header-image" />
            </a>
            <select className="language-selector" name="languageCV" onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">ENG</option>
                <option value="hr">HR</option>
            </select>
        </header>
    );
}
