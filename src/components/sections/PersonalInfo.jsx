export default function PersonalInfo(){
    return (
        <section className="personal-info-container">
            <h2>Personal Information</h2>
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="firstName">First Name </label>
                    <input id="firstName" type="text" name="firstName" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name </label>
                    <input id="lastName" type="text" name="lastName" />                
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <input id="email" type="email" name="email" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone Number </label>
                    <input id="phone" type="tel" name="phone" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="firstLink">Link 1 </label>
                    <input id="firstLink" type="url" name="firstLink" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="secondLink">Link 2 </label>
                    <input id="secondLink" type="url" name="secondLink" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="location">Location </label>
                    <input id="location" type="text" name="location" />    
                </div>
            </div>
        </section>
    );
}