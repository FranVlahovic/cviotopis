import MainButton from "../MainButton";
import DownloadIcon from "/src/assets/icons/download.svg";

export default function Qualifications(){
    function handlePrint(){
        const printContent = document.querySelector(".rendered-section");
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent.innerHTML;
        window.print();

        document.body.innerHTML = originalContent;
    }

    return (
        <section className="qualifications-container">
            <h2>Extra Qualifications</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="certs">Certifications</label>
                    <input type="text" id="certs" name="certs" />
                </div>

                <div className="form-group">
                    <label htmlFor="techs">Technologies</label>
                    <input type="text" id="techs" name="techs" />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input type="text" id="skills" name="skills" />
                </div>

                <div className="form-group">
                    <label htmlFor="interests">Interests</label>
                    <input type="text" id="interests" name="interests" />
                </div>
            </div>
            <MainButton buttonClass={'download-cv'} text={'Download CV'} aria={'Download CV Resume'} image={DownloadIcon} altImage={'Download Icon'} action={handlePrint} />
        </section>
    );
}