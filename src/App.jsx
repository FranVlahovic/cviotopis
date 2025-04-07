import GitHubIcon from "./assets/icons/github.svg";

import Header from "./components/Header";
import MainContent from "./components/MainContent";


export default function App(){
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
                <MainContent />
            </div>
            <div className="rendered-section">

            </div>
        </>
    );
};