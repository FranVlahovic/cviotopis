import html2pdf from "html2pdf.js";

import { useState } from "react";
import GitHubIcon from "./assets/icons/github.svg";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import RenderResume from "./components/RenderResume";


export default function App(){
    const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '', phone: '', firstLink:'', secondLink:'', location:'' })

    const [experiences, setExperiences] = useState([{ job: '', companyName:'', startMonth: '', startYear: '', endMonth: '', endYear: '', aboutJob:'', id:crypto.randomUUID() }])

    const [education, setEducation] = useState([{ degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '', id:crypto.randomUUID() }])

    const [qualifications, setQualifications] = useState({ certificates:'', technologies:'', skills:'', interests:'' })

    const [resumeVisible, setResumeVisible] = useState(false);

    const addExperience = () => {
        setExperiences(prev => [...prev, { job: '', companyName:'', startMonth: '', startYear: '', aboutJob:'', id:crypto.randomUUID() }])
    }    

    const addEducation = () => {
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
      
    const removeExperience = (id) => {
        setExperiences(prev => prev.filter(item => item.id !== id));
    }    

    const removeEducation = (id) => {
        setEducation(prev => prev.filter(item => item.id !== id));
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        setResumeVisible(!resumeVisible);
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
                />
                <MainContent personalInfo={personalInfo} experiences={experiences} addExperience={addExperience}  education={education} addEducation={addEducation} qualifications={qualifications} removeExperience={removeExperience} removeEducation={removeEducation} handleSubmit={handleSubmit} handlePrint={handlePrint} handleChange={handleChange} setPersonalInfo={setPersonalInfo} setEducation={setEducation} setExperiences={setExperiences} setQualifications={setQualifications} />    
            </div>
            <div className="rendered-section">
                <RenderResume personalInfo={personalInfo} experiences={experiences} education={education} qualifications={qualifications} resumeVisible={resumeVisible} />
            </div>
        </main>
    );
};