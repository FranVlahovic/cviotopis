export default function Qualifications({qualifications, setQualifications, handleChange}){

    return (
        <section className="qualifications-container">
            <h2>Extra Qualifications</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="certs">Certifications</label>
                    <input type="text" id="certs" name="certificates" value={qualifications.certificates} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="techs">Technologies</label>
                    <input type="text" id="techs" name="technologies" value={qualifications.technologies} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input type="text" id="skills" name="skills" value={qualifications.skills} onChange={(e) => handleChange(e, setQualifications)} />
                </div>

                <div className="form-group">
                    <label htmlFor="interests">Interests</label>
                    <input type="text" id="interests" name="interests" value={qualifications.interests} onChange={(e) => handleChange(e, setQualifications)} />
                </div>
            </div>
        </section>
    );
}