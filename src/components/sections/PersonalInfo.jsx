export default function PersonalInfo({ personalInfo, handleChange, setPersonalInfo, language, translations, resumeVisible }){
    const lang = translations[language];

    return (
        <section className="personal-info-container">
            <h2>{lang.heading}</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="firstName">{lang.firstName}</label>
                    <input id="firstName" type="text" name="firstName" onChange={(e) => handleChange(e, setPersonalInfo)} value={personalInfo.firstName} disabled={resumeVisible} required />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">{lang.lastName} </label>
                    <input id="lastName" type="text" name="lastName" value={personalInfo.lastName} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} required />                
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">{lang.email} </label>
                    <input id="email" type="email" name="email" value={personalInfo.email} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">{lang.phone} </label>
                    <input id="phone" type="tel" name="phone" value={personalInfo.phone} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="firstLink">{lang.link1}</label>
                    <input id="firstLink" type="url" name="firstLink" value={personalInfo.firstLink} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="secondLink">{lang.link2}</label>
                    <input id="secondLink" type="url" name="secondLink" value={personalInfo.secondLink} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="location">{lang.location}</label>
                    <input id="location" type="text" name="location" value={personalInfo.location} onChange={(e) => handleChange(e, setPersonalInfo)} disabled={resumeVisible} required />    
                </div>
            </div>
        </section>
    );
}