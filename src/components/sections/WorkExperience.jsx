import MainButton from "../MainButton"
import PlusIcon from "/src/assets/icons/plus.svg";
import DeleteIcon from "/src/assets/icons/delete.svg";

export default function WorkExperience({ experiences, addExperience, removeExperience, handleChange, setExperiences}){

    return (
        <section className="experience-container">
            <h2>Work Experience</h2>
            {experiences.map((experience, index) => (
                <div className="work-experience" key={experience.id}>
                    {experiences.length > 1 && (
                        <div className="experience-heading">
                            <h3>Experience {index + 1}</h3>
                            <MainButton buttonClass={'remove-item'} aria={'Remove Experience'} image={DeleteIcon} altImage={'Delete Icon'} action={() => removeExperience(experience.id)} />
                        </div>
                    )}
                    
                    <div className="inputs" id={experience.id}>  
                        <div className="form-group">
                            <label htmlFor="job">Job Title</label>
                            <input type="text" id="job" name="job" value={experience.job} onChange={(e) => handleChange(e, setExperiences, experience.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" id="companyName" name="companyName" value={experience.companyName} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">Start Date</label>
                            <input type="date" id="dateStart" name="dateStart" value={experience.startDate} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">End Date</label>
                            <input type="date" id="dateEnd" name="dateEnd" value={experience.endDate} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>

                        <div className="form-group about-job">
                            <label htmlFor="aboutJob">About</label>
                            <input type="text" id="aboutJob" name="aboutJob" value={experience.aboutJob} onChange={(e) => handleChange(e,setExperiences, experience.id)} />
                        </div>
                    </div>
                </div>
            ))}
            <MainButton buttonClass={'add-experience'} text={'Add Experience'} aria={'Add Experience'} image={PlusIcon} altImage={'Plus Icon'} action={addExperience} />
        </section>
    );
}