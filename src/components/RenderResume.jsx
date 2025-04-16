export default function RenderResume({ personalInfo, experiences, education, qualifications, translations, language }) {
    const lang = translations[language];

    return (
        <>
            <div className="rendered-personal-container">
                <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                <div className="rendered-personal-nav">
                    <h2>{personalInfo.email}</h2>
                    <div className="nav-line"></div>
                    <h2>{personalInfo.phone}</h2>
                    <div className="nav-line"></div>
                    <h2>{personalInfo.location}</h2>
                    <div className="nav-line"></div>
                    {personalInfo.firstLink && <h2><a href={personalInfo.firstLink}>Portfolio</a></h2>}
                    {personalInfo.secondLink &&<h2><a href={personalInfo.secondLink}>GitHub</a></h2>}
                </div>
            </div>

            <div className="rendered-experience-container">
                <h2>{lang.headingExperience}</h2>
                {experiences.map((experience) =>
                    <div className="rendered-experience">
                        <div className="rendered-experience-info-first">
                            <h3>{experience.job}</h3>
                            <h3>{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear ? experience.endYear : 'Present'}</h3>
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

            <div className="rendered-education-container">
                <h2>{lang.headingEducation}</h2>
                {education.map((edu) =>
                    <div className="rendered-education">
                        <div className="rendered-education-info-first">
                            <h3>{edu.university}</h3>
                            <h3>{edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear ? edu.endYear : 'Present'}</h3>
                        </div>
                        <div className="rendered-education-info-second">
                            <h3>{edu.degree}</h3>
                            <h3>{edu.location}</h3>
                        </div>
                        <div className="rendered-education-about">
                            <p>{edu.aboutEducation}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="rendered-qualifications-container">
                <h2>{lang.qualifications}</h2>
                <div className="rendered-qualifications">
                    <h3>{lang.certificates}: </h3><p>{qualifications.certificates}</p>  
                    <h3>{lang.technologies}: </h3><p>{qualifications.technologies}</p>
                    <h3>{lang.skills}: </h3><p>{qualifications.skills}</p> 
                    <h3>{lang.interests}: </h3><p>{qualifications.interests}</p>
                </div>
            </div>
        </>
    );
}
