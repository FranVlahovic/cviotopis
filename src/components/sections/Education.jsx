import MainButton from "../MainButton";
import PlusIcon from "/src/assets/icons/plus.svg";

export default function Education(){
    return (
        <section className="education-container">
            <h2>Education</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree" />
                </div>

                <div className="form-group">
                    <label htmlFor="university">University Name</label>
                    <input type="text" id="university" name="university" />
                </div>

                <div className="form-group">
                    <label htmlFor="dateStart">Start Date</label>
                    <input type="date" id="dateStart" name="dateStart" />
                </div>

                <div className="form-group">
                    <label htmlFor="dateEnd">End Date</label>
                    <input type="date" id="dateEnd" name="dateEnd" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" />
                </div>

                <div className="form-group about-education">
                    <label htmlFor="aboutEducation">About</label>
                    <input type="textarea" id="aboutEducation" name="aboutEducation" />
                </div>
            </div>

            <MainButton buttonClass={'add-education'} text={'Add Education'} aria={'Add Education'} image={PlusIcon} altImage={'Plus Icon'} />
        </section>
    );
}