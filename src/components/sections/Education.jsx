import MainButton from "../MainButton";
import PlusIcon from "/src/assets/icons/plus.svg";
import DeleteIcon from "/src/assets/icons/delete.svg";


export default function Education({ education, addEducation, handleChange, removeEducation, setEducation }){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
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
                            <input type="text" id="degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, setEducation, edu.id)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="university">University Name</label>
                            <input type="text" id="university" name="university" value={edu.university} onChange={(e) => handleChange(e, setEducation, edu.id)} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">Start Date</label>
                            <div className="date-inputs">
                                <select name="startMonth" id="months" value={edu.startMonth} onChange={(e) => handleChange(e,setEducation, edu.id)}>
                                    {months.map(month => <option value={month}>{month}</option> )}
                                </select>
                                <input type="number" id="dateStart" name="startYear" value={edu.startYear} onChange={(e) => handleChange(e,setEducation, edu.id)} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">End Date</label>
                                <div className="date-inputs">
                                    <select name="endMonth" id="months" value={edu.endMonth} onChange={(e) => handleChange(e,setEducation, edu.id)}>
                                        {months.map(month => <option value={month}>{month}</option> )}
                                    </select>
                                    <input type="number" id="dateEnd" name="endYear" value={edu.endYear} onChange={(e) => handleChange(e,setEducation, edu.id)} required />
                                </div>
                        </div>


                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="locationEdu" name="location" value={edu.location} onChange={(e) => handleChange(e, setEducation, edu.id)} required />
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