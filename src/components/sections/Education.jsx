import MainButton from "../MainButton";
import PlusIcon from "/src/assets/icons/plus.svg";
import DeleteIcon from "/src/assets/icons/delete.svg";


export default function Education({ education, addEducation, handleChange, removeEducation, setEducation, language, translations, resumeVisible }){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const lang = translations[language];

    return (
        <section className="education-container">
            <h2>{lang.headingEducation}</h2>
            {education.map((edu, index) => (
                <div className="education-info" key={index}>
                    {education.length > 1 && (
                        <div className="education-heading">
                            <h3>{lang.education} {index + 1}</h3>
                            <MainButton buttonClass={'remove-item'} aria={'Remove Experience'} image={DeleteIcon} altImage={'Plus Icon'} action={() => removeEducation(edu.id)} />
                        </div>
                    )}
                    <div className="inputs">
                        <div className="form-group">
                            <label htmlFor="degree">{lang.degree}</label>
                            <input type="text" id="degree" name="degree" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.degree} onChange={(e) => handleChange(e, setEducation, edu.id)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="university">{lang.university}</label>
                            <input type="text" id="university" name="university" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.university} onChange={(e) => handleChange(e, setEducation, edu.id)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">{lang.startDate}</label>
                            <div className="date-inputs">
                                <select name="startMonth" id="months" value={edu.startMonth} onChange={(e) => handleChange(e,setEducation, edu.id)}>
                                    <option value="" disabled>Month</option>
                                    {months.map(month => <option value={month}>{month}</option> )}
                                </select>
                                <input type="number" id="dateStart" name="startYear" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.startYear} onChange={(e) => handleChange(e,setEducation, edu.id)} required placeholder="Year" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">{lang.endDate}</label>
                                <div className="date-inputs">
                                    <select name="endMonth" id="months" value={edu.endMonth} onChange={(e) => handleChange(e,setEducation, edu.id)}>
                                        <option value="" disabled>Month</option>
                                        {months.map(month => <option value={month}>{month}</option> )}
                                    </select>
                                    <input type="number" id="dateEnd" name="endYear" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.endYear} onChange={(e) => handleChange(e,setEducation, edu.id)} required placeholder="Year" />
                                </div>
                        </div>


                        <div className="form-group">
                            <label htmlFor="location">{lang.location}</label>
                            <input type="text" id="locationEdu" name="location" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.location} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group about-education">
                            <label htmlFor="aboutEducation">{lang.about}</label>
                            <input type="textarea" id="aboutEducation" name="aboutEducation" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={edu.aboutEducation} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>
                    </div>
                </div>
            ))}

            <MainButton buttonClass={'add-education'} text={lang.addEducation} aria={'Add Education'} image={PlusIcon} altImage={'Plus Icon'} action={addEducation} />
        </section>
    );
}