import AddButton from "./MainButton";


export default function Header({ logo, firstTwo, text, image, altText, link, setLanguage, resumeVisible, handleEdit, handleReset, isMobile }) {
    return (
        <header className="header">
            <h1 className="header-logo"><span>{firstTwo}</span>{logo}</h1>
            <div className="header-right">
                <a className="header-link" href={link} target="_blank" rel="noopener noreferrer">
                    {text}
                    <img src={image} alt={altText} className="header-image" />
                </a>
                <select className="language-selector" name="languageCV" onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en">ENG</option>
                    <option value="hr">HR</option>
                </select>
                
                
                {resumeVisible && !isMobile &&
                    <>
                        <AddButton buttonClass={"edit-form-button"} action={handleEdit} aria={"Edit Form Inputs"} text={"Edit Form"} />
                        <AddButton buttonClass={"reset-form-button"} action={handleReset} aria={"Reset Form Inputs"} text={"Reset Form"} />
                    </>
                }
            </div>
        </header>
    );
}
