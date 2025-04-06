import PersonalInfo from "./sections/PersonalInfo";
import WorkExperience from "./sections/WorkExperience";

export default function MainContent(){

    return (
        <form action="" className="form-main">
            <PersonalInfo />
            <WorkExperience buttonClass={'add-experience'} text={'Add Experience'} aria={'Add Experience'} />
        </form>
    );
}