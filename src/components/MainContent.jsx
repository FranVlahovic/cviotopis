import DownloadIcon from "/src/assets/icons/download.svg";

import Education from "./sections/Education";
import PersonalInfo from "./sections/PersonalInfo";
import Qualifications from "./sections/Qualifications";
import WorkExperience from "./sections/WorkExperience";
import MainButton from "../components/MainButton";

export default function MainContent({ personalInfo, experiences, addExperience, education, addEducation, qualifications, removeExperience, removeEducation, handleSubmit, handlePrint, handleChange, setExperiences, setEducation, setQualifications, setPersonalInfo, language, translations, resumeVisible }){
    const lang = translations[language];
    
    return (
        <form onSubmit={handleSubmit} className="form-main">
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handleChange={handleChange} language={language} translations={translations} resumeVisible={resumeVisible} />
            <WorkExperience experiences={experiences} setExperiences={setExperiences} addExperience={addExperience} handleChange={handleChange} removeExperience={removeExperience} language={language} translations={translations} />
            <Education education={education} setEducation={setEducation} addEducation={addEducation} handleChange={handleChange} removeEducation={removeEducation} language={language} translations={translations} />
            <Qualifications qualifications={qualifications} setQualifications={setQualifications} handleChange={handleChange} language={language} translations={translations} />
            
            <div className="submit-print">
                <MainButton buttonClass={'submit-button'} aria={'Submit Form'} text={lang.submitForm} type="submit" disabled={resumeVisible} />
                <MainButton buttonClass={'download-cv'} text={lang.download} aria={'Download CV Resume'} image={DownloadIcon} altImage={'Download Icon'} action={handlePrint} disabled={!resumeVisible} />
            </div>
        </form>
    );
}