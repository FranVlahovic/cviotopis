export default function RenderResume({ personalInfo, experiences, education, qualifications, resumeVisible, translations, language }) {
    const lang = translations[language];
    
    if (resumeVisible == false) return null;

    return (
        <>
            <h1>{personalInfo.firstName}</h1>
            <div className="rendered-experience-container">
                <h2>{lang.headingExperience}</h2>
                {experiences.map((experience) =>
                    <div className="rendered-experience">
                        <div className="rendered-experience-info-first">
                            <h3>{experience.job}</h3>
                            <h3>{experience.startMonth}{experience.startYear}{experience.endMonth}{experience.endYear}</h3>
                        </div>
                        <div className="rendered-experience-info-second">
                            <h3>{experience.companyName}</h3>
                        </div>
                        <div className="rendered-experience-about">
                            <p>{experience.aboutJob}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
