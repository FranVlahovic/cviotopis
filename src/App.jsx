import { useState } from "react";
import GitHubIcon from "./assets/icons/github.svg";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import RenderResume from "./components/RenderResume";


export default function App(){
    const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '', phone: '', firstLink:'', secondLink:'', location:'' })

    const [experiences, setExperiences] = useState([{ job: '', companyName:'', startDate:'', endDate:'', aboutJob:'', id:crypto.randomUUID() }])

    const [education, setEducation] = useState([{ degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '', id:crypto.randomUUID() }])

    const [qualifications, setQualifications] = useState({ certificates:'', technologies:'', skills:'', interests:'' })

    const [resume, setResume] = useState(false);

    const addExperience = () => {
        setExperiences(prev => [...prev, { job: '', companyName:'', startDate:'', endDate:'', aboutJob:'', id:crypto.randomUUID() }])
    }

    const addEducation = () => {
        setEducation(prev => [...prev, { degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '', id:crypto.randomUUID() }])
    }

    function handleChange(e, setter, id = null) {
        const { name, value } = e.target;
    
        // If there's no ID, update a flat object (personalInfo, qualifications)
        if (!id) {
            setter(prev => ({ ...prev, [name]: value }));
        } 
        // If ID exists, update a specific item in an array (experiences, education)
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
        setResume(true);
    }

    function handlePrint(){
        const printContent = document.querySelector(".rendered-section");
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent.innerHTML;
        window.print();

        document.body.innerHTML = originalContent;
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
                <RenderResume personalInfo={personalInfo} experiences={experiences} education={education} qualifications={qualifications} />
            </div>
        </main>
    );
};