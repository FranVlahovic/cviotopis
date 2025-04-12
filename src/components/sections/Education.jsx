import MainButton from "../MainButton";
import PlusIcon from "/src/assets/icons/plus.svg";
import DeleteIcon from "/src/assets/icons/delete.svg";

export default function Education({ education, addEducation, handleChange, removeEducation, setEducation }){
    return (
        <section className="education-container">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div className="education-info" key={index}>
                    {education.length > 1 && (
                        <div className="education-heading">
                            <h3>Education {index + 1}</h3>
                            <MainButton buttonClass={'remove-item'} aria={'Remove Experience'} image={DeleteIcon} altImage={'Plus Icon'} action={() => removeEducation(edu.id)} />
                        </div>
                    )}
                    <div className="inputs">
                        <div className="form-group">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id="degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="university">University Name</label>
                            <input type="text" id="university" name="university" value={edu.university} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">Start Date</label>
                            <input type="date" id="dateStart" name="dateStart" value={edu.startDate} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">End Date</label>
                            <input type="date" id="dateEnd" name="dateEnd" value={edu.endDate} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="locationEdu" name="location" value={edu.location} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>

                        <div className="form-group about-education">
                            <label htmlFor="aboutEducation">About</label>
                            <input type="textarea" id="aboutEducation" name="aboutEducation" value={edu.aboutEducation} onChange={(e) => handleChange(e, setEducation, edu.id)} />
                        </div>
                    </div>
                </div>
            ))}

            <MainButton buttonClass={'add-education'} text={'Add Education'} aria={'Add Education'} image={PlusIcon} altImage={'Plus Icon'} action={addEducation} />
        </section>
    );
}