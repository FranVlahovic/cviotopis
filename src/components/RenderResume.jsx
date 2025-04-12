export default function RenderResume({ personalInfo, experiences, education, qualifications, resumeVisible }) {
    if (resumeVisible == false) return null;

    return (
        <>
            <h1>{personalInfo.firstName}</h1>
            {experiences.map((experience) => 
                <h1 key={experience.id}>{experience.startMonth}{experience.startYear}</h1>
            )}
        </>
    );
}
