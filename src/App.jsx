import { useState } from "react";
import GitHubIcon from "./assets/icons/github.svg";

import Header from "./components/Header";
import MainContent from "./components/MainContent";


export default function App(){

    const [experiences, setExperiences] = useState([{ job: '', companyName:'', startDate:'', endDate:'', aboutJob:'' }])

    const [education, setEducation] = useState([{ degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '' }])

    const addExperience = () => {
        setExperiences(prev => [...prev, { job: '', companyName:'', startDate:'', endDate:'', aboutJob:'' }])
    }

    const addEducation = () => {
        setEducation(prev => [...prev, { degree: '', university: '', startDate: '', endDate: '', location: '', aboutEducation: '' }])
    }

    const handleInputChange = () => {

    }

    // const removeExperience = (id) => {
    //     setExperiences(experiences.filter(prevExp => prevExp.id !== id))
    // }

    return (
        <>
            <div className="form-section">
                <Header 
                    logo= "cviotopis" 
                    link= "https://github.com/franvlahovic"
                    image={GitHubIcon}
                    text= "FranVlahović"
                    altText= "GitHub Logo Icon"
                />
                <MainContent experiences={experiences} addExperience={addExperience} handleInputChange={handleInputChange} education={education} addEducation={addEducation} />
            </div>
            <div className="rendered-section">

            </div>
        </>
    );
};