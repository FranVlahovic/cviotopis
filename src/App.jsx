import Header from "./components/Header";
import GitHubIcon from "./assets/icons/github.svg";


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
            </div>
            <div className="rendered-section">
                
            </div>
        </>
    );
}
