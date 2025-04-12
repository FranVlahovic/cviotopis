export default function PersonalInfo({ personalInfo, handleChange, setPersonalInfo }){
    return (
        <section className="personal-info-container">
            <h2>Personal Information</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="firstName">First Name </label>
                    <input id="firstName" type="text" name="firstName" onChange={(e) => handleChange(e, setPersonalInfo)} value={personalInfo.firstName}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name </label>
                    <input id="lastName" type="text" name="lastName" value={personalInfo.lastName} onChange={(e) => handleChange(e, setPersonalInfo)} />                
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <input id="email" type="email" name="email" value={personalInfo.email} onChange={(e) => handleChange(e, setPersonalInfo)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone Number </label>
                    <input id="phone" type="tel" name="phone" value={personalInfo.phone} onChange={(e) => handleChange(e, setPersonalInfo)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="firstLink">Link 1 </label>
                    <input id="firstLink" type="url" name="firstLink" value={personalInfo.firstLink} onChange={(e) => handleChange(e, setPersonalInfo)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="secondLink">Link 2 </label>
                    <input id="secondLink" type="url" name="secondLink" value={personalInfo.secondLink} onChange={(e) => handleChange(e, setPersonalInfo)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="location">Location </label>
                    <input id="location" type="text" name="location" value={personalInfo.location} onChange={(e) => handleChange(e, setPersonalInfo)} />    
                </div>
            </div>
        </section>
    );
}