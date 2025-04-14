export default function Qualifications({qualifications, setQualifications, handleChange, language, translations}){
    const lang = translations[language];
    
    return (
        <section className="qualifications-container">
            <h2>{lang.qualifications}</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="certs">{lang.certificates}</label>
                    <input type="text" id="certs" name="certificates" value={qualifications.certificates} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="techs">{lang.technologies}</label>
                    <input type="text" id="techs" name="technologies" value={qualifications.technologies} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">{lang.skills}</label>
                    <input type="text" id="skills" name="skills" value={qualifications.skills} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="interests">{lang.interests}</label>
                    <input type="text" id="interests" name="interests" value={qualifications.interests} onChange={(e) => handleChange(e, setQualifications)} />
                </div>
            </div>
        </section>
    );
}