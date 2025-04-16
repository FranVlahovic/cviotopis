import { useState } from "react";
import GitHubIcon from "./assets/icons/github.svg";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import RenderResume from "./components/RenderResume";


export default function App(){
    const translations = {
        en: {
          heading: "Personal Information",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone Number",
          location: "Location",
          link1: "Portfolio",
          link2: "GitHub",

          headingExperience: "Work Experience",
          experience: "Experience",
          expTitle: "Job Title",
          companyName: "Company Name",
          startDate: "Start Date",
          endDate: "End Date",
          about: "About",
          addExperience: "Add Experience",

          headingEducation: "Education",
          education: "Education",
          degree: "Degree",
          university: "University Name",
          addEducation: "Add Education",

          qualifications: "Qualifications",
          certificates: "Certifications",
          technologies: "Technologies",
          skills: "Skills",
          interests: "Interests",

          submitForm: "Submit Form",
          download: "Download CV",
        },
        hr: {
          heading: "Osobne Informacije",
          firstName: "Ime",
          lastName: "Prezime",
          email: "Email",
          phone: "Broj Telefona",
          link1: "Portfolio",
          link2: "GitHub",
          location: "Lokacija",

          headingExperience: "Radno Iskustvo",
          experience: "Iskustvo",
          expTitle: "Uloga",
          companyName:"Poslodavac",
          startDate: "Početak rada",
          endDate: "Završetak rada",
          about: "Opis",
          addExperience: "Dodaj Iskustvo",

          headingEducation: "Obrazovanje",
          education: "Obrazovanje",
          degree: "Naziv Smjera",
          university: "Naziv ustanove",
          addEducation: "Dodaj Obraz.",

          qualifications: "Kvalifikacije",
          certificates: "Certifikati",
          technologies: "Tehnologije",
          skills: "Vještine",
          interests: "Interesi",

          submitForm: "Kreiraj CV",
          download: "Preuzmi CV",

        }
    };

    const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '', phone: '', firstLink:'', secondLink:'', location:'' })

    const [experiences, setExperiences] = useState([{ job: '', companyName:'', startMonth: '', startYear: '', endMonth: '', endYear: '', aboutJob:'', id:crypto.randomUUID() }])

    const [education, setEducation] = useState([{ degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '', id:crypto.randomUUID() }])

    const [qualifications, setQualifications] = useState({ certificates:'', technologies:'', skills:'', interests:'' })

    const [resumeVisible, setResumeVisible] = useState(false);

    const [language, setLanguage] = useState('en');
    

    function addExperience () {
        setExperiences(prev => [...prev, { job: '', companyName:'', startMonth: '', startYear: '', aboutJob:'', id:crypto.randomUUID() }])
    }    

    function addEducation(){
        setEducation(prev => [...prev, { degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '', id:crypto.randomUUID() }])
    }    

    function handleChange(e, setter, id = null) {
        const { name, value } = e.target;
    
        if (!id) {
            setter(prev => ({ ...prev, [name]: value }));
        }     

        else {
            setter(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, [name]: value } : item
                )    
            );    
        }    
    }    
      
    function removeExperience(id) {
        setExperiences(prev => prev.filter(item => item.id !== id));
    }    

    function removeEducation(id) {
        setEducation(prev => prev.filter(item => item.id !== id));
    }    

    function handleSubmit (e) {
        e.preventDefault();
        setResumeVisible(true);
        window.scrollTo({top: 0,behavior: "smooth"});
    }

    function handleEdit(e){
        e.preventDefault();
        setResumeVisible(false);
    }
    
    function handleReset(e) {
        e.preventDefault();

        setPersonalInfo({ 
            firstName: '', 
            lastName: '', 
            email: '', 
            phone: '', 
            firstLink: '', 
            secondLink: '', 
            location: '' 
        });
    
        setExperiences([
            { 
                job: '', 
                companyName: '', 
                startMonth: '', 
                startYear: '', 
                endMonth: '', 
                endYear: '', 
                aboutJob: '', 
                id: crypto.randomUUID() 
            }
        ]);
    
        setEducation([
            { 
                degree: '', 
                university: '', 
                startDate: '', 
                endDate: '', 
                location: '', 
                aboutEducation: '', 
                id: crypto.randomUUID() 
            }
        ]);
    
        setQualifications({ 
            certificates: '', 
            technologies: '', 
            skills: '', 
            interests: '' 
        });
    
        setResumeVisible(false);
    }
    
    function handlePrint() {
        window.print();
    }

    function boilerplateCV(e) {
        e.preventDefault();

        setPersonalInfo({ 
            firstName: 'Fran', 
            lastName: 'Vlahovic', 
            email: 'franvlahovic@proton.me', 
            phone: '0911234567', 
            firstLink: '', 
            secondLink: 'https://github.com/FranVlahovic', 
            location: 'Opatija, Hrvatska' 
        });
    
        setExperiences([
            { 
                job: 'Full Stack Developer', 
                companyName: 'Google Croatia', 
                startMonth: 'August', 
                startYear: '2025', 
                endMonth: '', 
                endYear: '', 
                aboutJob: 'Currently working as an Full Stack Developer for FAANG Company (Google).', 
                id: crypto.randomUUID() 
            },
            { 
                job: 'Front End Developer', 
                companyName: 'Odin Project', 
                startMonth: 'August', 
                startYear: '2020', 
                endMonth: 'May', 
                endYear: '2025', 
                aboutJob: 'Worked as an Front End Developer, worked for the biggest web development open source curriculum.', 
                id: crypto.randomUUID() 
            },
            { 
                job: 'Front End Developer', 
                companyName: 'Pied Pipper', 
                startMonth: 'August', 
                startYear: '2016', 
                endMonth: 'August', 
                endYear: '2018', 
                aboutJob: 'Worked as an Front End Developer, learned a lot about lossless compression.', 
                id: crypto.randomUUID() 
            }
        ]);
    
        setEducation([
            { 
                degree: 'Business Entrepreneurship', 
                university: 'Veleuciliste u Rijeci',
                startMonth: 'August', 
                startYear: '2016', 
                endMonth: 'August',
                endYear: '2019', 
                location: 'Rijeka', 
                aboutEducation: 'Finished 120 ECTS in Business Studies.', 
                id: crypto.randomUUID() 
            }
        ]);
    
        setQualifications({ 
            certificates: 'Python for Everybody (University of Michigan), DataData Everywhere (Google).', 
            technologies: 'Mongo DB, Express, React, Node JS, Docker, Git, HTML, CSS, Bundlers.', 
            skills: 'Web Development, Software Development, Mobile Development, Graphic Design, Sales.', 
            interests: 'Weightlifting, Sports, Outdoors, Running, Cooking.' 
        });
    
    }
    
    
    return (
        <main>
            <div className="form-section">
                <Header 
                    logo= "cviotopis" 
                    link= "https://github.com/franvlahovic"
                    image={GitHubIcon}
                    text= "FranVlahović"
                    altText= "GitHub Logo Icon"
                    setLanguage={setLanguage}
                    handleEdit={handleEdit}
                    handleReset={handleReset}
                    resumeVisible={resumeVisible}
                    boilerplateCV={boilerplateCV}
                />
                <MainContent 
                    personalInfo={personalInfo} 
                    experiences={experiences} 
                    addExperience={addExperience}  
                    education={education} 
                    addEducation={addEducation} 
                    qualifications={qualifications} 
                    removeExperience={removeExperience} 
                    removeEducation={removeEducation} 
                    handleSubmit={handleSubmit} 
                    handlePrint={handlePrint} 
                    handleChange={handleChange} 
                    setPersonalInfo={setPersonalInfo} 
                    setEducation={setEducation} 
                    setExperiences={setExperiences} 
                    setQualifications={setQualifications}
                    language={language}
                    translations={translations}
                    resumeVisible={resumeVisible}
                />    
            </div>
            <div className="rendered-section" style={{ display: resumeVisible ? "block" : "none" }}>
                <RenderResume personalInfo={personalInfo} experiences={experiences} education={education} qualifications={qualifications} resumeVisible={resumeVisible} translations={translations} language={language} />
            </div>
        </main>
    );
};