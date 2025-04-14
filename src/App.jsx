import html2pdf from "html2pdf.js";

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
          link1: "Link 1",
          link2: "Link 2",
          location: "Location",

          headingExperience: "Work Experience",
          experience: "Experience",
          expTitle: "Job Title",
          companyName: "Company Name",
          startDate: "Start Date",
          endDate: "End Date",
          about: "About",
          addExperience: "Add Experience"
        },
        hr: {
          heading: "Osobne Informacije",
          firstName: "Ime",
          lastName: "Prezime",
          email: "Email",
          phone: "Broj Telefona",
          link1: "Link 1",
          link2: "Link 2",
          location: "Lokacija",

          headingExperience: "Radno Iskustvo",
          experience: "Iskustvo",
          expTitle: "Uloga",
          companyName:"Poslodavac",
          startDate: "Početak rada",
          endDate: "Završetak rada",
          about: "Opis",
          addExperience: "Dodaj Iskustvo"
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
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
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
        const printedPage = document.querySelector(".rendered-section");
        
        const opt = {
            filename:     `${personalInfo.firstName}${personalInfo.lastName}-resume.pdf`,
            image:        { type: 'pdf', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
    
        resumeVisible && html2pdf().set(opt).from(printedPage).save();
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
            <div className="rendered-section">
                <RenderResume personalInfo={personalInfo} experiences={experiences} education={education} qualifications={qualifications} resumeVisible={resumeVisible} />
            </div>
        </main>
    );
};