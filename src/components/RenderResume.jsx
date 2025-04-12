export default function RenderResume({ personalInfo, experiences, education, qualifications }) {
    return (
        <>
            <h1>{personalInfo.firstName}</h1>
            {experiences.map((experience) => 
                <h1 key={experience.id}>{experience.startDate}</h1>
            )}
        </>
    )
}