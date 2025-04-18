import MainButton from "../MainButton"
import PlusIcon from "/src/assets/icons/plus.svg";
import DeleteIcon from "/src/assets/icons/delete.svg";

export default function WorkExperience({ experiences, addExperience, removeExperience, handleChange, setExperiences, translations, language, resumeVisible}){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const lang = translations[language];

    return (
        <section className="experience-container">
            <h2>{lang.headingExperience}</h2>
            {experiences.map((experience, index) => (
                <div className="work-experience" key={experience.id}>
                    {experiences.length > 1 && (
                        <div className="experience-heading">
                            <h3>{lang.experience} {index + 1}</h3>
                            <MainButton buttonClass={'remove-item'} aria={'Remove Experience'} image={DeleteIcon} altImage={'Delete Icon'} action={() => removeExperience(experience.id)} />
                        </div>
                    )}
                    
                     <div className="inputs" id={experience.id}>  
                        <div className="form-group">
                            <label htmlFor="job">{lang.expTitle}</label>
                            <input type="text" id="job" name="job" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={experience.job} onChange={(e) => handleChange(e, setExperiences, experience.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="companyName">{lang.companyName}</label>
                            <input type="text" id="companyName" name="companyName" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={experience.companyName} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">{lang.startDate}</label>
                            <div className="date-inputs">
                                <select name="startMonth" id="months" value={experience.startMonth} onChange={(e) => handleChange(e,setExperiences, experience.id)}>
                                    <option value="" disabled>Month</option>
                                    {months.map((month, index) => <option value={month} key={index}>{month}</option> )}
                                </select>
                                <input type="number" id="dateStart" name="startYear" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={experience.startYear} onChange={(e) => handleChange(e,setExperiences, experience.id)} placeholder="Year" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">{lang.endDate}</label>
                                <div className="date-inputs">
                                    <select name="endMonth" id="months" value={experience.endMonth} onChange={(e) => handleChange(e,setExperiences, experience.id)}>
                                        <option value="" disabled>Month</option>
                                        {months.map(month => <option value={month}>{month}</option> )}
                                    </select>
                                    <input type="number" id="dateEnd" name="endYear" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={experience.endYear} onChange={(e) => handleChange(e,setExperiences, experience.id)} placeholder="Year" />
                                </div>
                        </div>

                        <div className="form-group about-job">
                            <label htmlFor="aboutJob">{lang.about}</label>
                            <input type="text" id="aboutJob" name="aboutJob" className={resumeVisible && 'input-disabled'} disabled={resumeVisible} value={experience.aboutJob} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>
                    </div>
                </div>
            ))}
            <MainButton buttonClass={'add-experience'} text={lang.addExperience} aria={'Add Experience'} image={PlusIcon} altImage={'Plus Icon'} action={addExperience} disabled={resumeVisible} />
        </section>
    );
}