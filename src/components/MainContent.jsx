import Education from "./sections/Education";
import PersonalInfo from "./sections/PersonalInfo";
import Qualifications from "./sections/Qualifications";
import WorkExperience from "./sections/WorkExperience";

export default function MainContent(){

    return (
        <form action="" className="form-main">
            <PersonalInfo />
            <WorkExperience />
            <Education />
            <Qualifications />
        </form>
    );
}