import Education from "./sections/Education";
import PersonalInfo from "./sections/PersonalInfo";
import Qualifications from "./sections/Qualifications";
import WorkExperience from "./sections/WorkExperience";

export default function MainContent({ experiences, addExperience, handleInputChange, education, addEducation }){
    return (
        <form action="" className="form-main">
            <PersonalInfo />
            <WorkExperience experiences={experiences} addExperience={addExperience} handleInputChange={handleInputChange} />
            <Education education={education} addEducation={addEducation} />
            <Qualifications />
        </form>
    );
}