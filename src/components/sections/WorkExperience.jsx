import MainButton from "../MainButton"
import PlusIcon from "/src/assets/icons/plus.svg";

export default function WorkExperience({ experiences, addExperience, handleInputChange }){

    return (
        <section className="experience-container">
            <h2>Work Experience</h2>
            {experiences.map(({ job, companyName, startDate, endDate, aboutJob }, index) => (
                <div className="work-experience" key={index}>
                    {experiences.length > 1 && (
                        <div className="experience-heading">
                            <h3>Experience {index + 1}</h3>
                            <MainButton buttonClass={'remove-experience'} aria={'Remove Experience'} image={PlusIcon} altImage={'Plus Icon'} />
                        </div>
                    )}
                    
                    <div className="inputs">  
                        <div className="form-group">
                            <label htmlFor="job">Job Title</label>
                            <input type="text" id="job" name="job" value={job} onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" id="companyName" name="companyName" value={companyName} onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateStart">Start Date</label>
                            <input type="date" id="dateStart" name="dateStart" value={startDate} onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dateEnd">End Date</label>
                            <input type="date" id="dateEnd" name="dateEnd" value={endDate} onChange={handleInputChange} />
                        </div>

                        <div className="form-group about-job">
                            <label htmlFor="aboutJob">About</label>
                            <input type="text" id="aboutJob" name="aboutJob" value={aboutJob} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            ))}
            <MainButton buttonClass={'add-experience'} text={'Add Experience'} aria={'Add Experience'} image={PlusIcon} altImage={'Plus Icon'} action={addExperience} />
        </section>
    );
}