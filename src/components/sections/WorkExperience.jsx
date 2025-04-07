import MainButton from "../MainButton"
import PlusIcon from "/src/assets/icons/plus.svg";

export default function WorkExperience(){
    return (
        <section className="experience-container">
            <h2>Work Experience</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" id="job" name="job" />
                </div>

                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" name="companyName" />
                </div>

                <div className="form-group">
                    <label htmlFor="dateStart">Start Date</label>
                    <input type="date" id="dateStart" name="dateStart" />
                </div>

                <div className="form-group">
                    <label htmlFor="dateEnd">End Date</label>
                    <input type="date" id="dateEnd" name="dateEnd" />
                </div>

                <div className="form-group about-job">
                    <label htmlFor="aboutJob">About</label>
                    <input type="textarea" id="aboutJob" name="aboutJob" />
                </div>
            </div>

            <MainButton buttonClass={'add-experience'} text={'Add Experience'} aria={'Add Experience'} image={PlusIcon} altImage={'Plus Icon'} />
        </section>
    );
}