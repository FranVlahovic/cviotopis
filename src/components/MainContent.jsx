import DownloadIcon from "/src/assets/icons/download.svg";

import Education from "./sections/Education";
import PersonalInfo from "./sections/PersonalInfo";
import Qualifications from "./sections/Qualifications";
import WorkExperience from "./sections/WorkExperience";
import MainButton from "../components/MainButton";

export default function MainContent({ personalInfo, experiences, addExperience, education, addEducation, qualifications, removeExperience, removeEducation, handleInputChange, handleSubmit, handlePrint }){
    return (
        <form onSubmit={handleSubmit} className="form-main">
            <PersonalInfo personalInfo={personalInfo} />
            <WorkExperience experiences={experiences} addExperience={addExperience} handleInputChange={handleInputChange} removeExperience={removeExperience} />
            <Education education={education} addEducation={addEducation} handleInputChange={handleInputChange} removeEducation={removeEducation} />
            <Qualifications qualifications={qualifications} />
            <div className="submit-print">
                <MainButton buttonClass={'submit-button'} aria={'Submit Form'} text={'Submit Form'} type="submit" /> 
                <MainButton buttonClass={'download-cv'} text={'Download CV'} aria={'Download CV Resume'} image={DownloadIcon} altImage={'Download Icon'} action={handlePrint} />
            </div>
        </form>
    );
}