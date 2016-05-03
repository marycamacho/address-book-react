import React from 'react';

class ContactForm extends React.Component {
    
      
    
    render() {
        return (
            <div>
                
                <form id="contact-form" onSubmit={this._handleSubmit.bind(this)} >
                    <label className="">Add Contact Details</label>
                    <div className=" contact-form-fields">
                        <input id="firstName" className="input" placeholder="First Name:" ref={(input) =>this._fName = input}  /><br />

                        <input id="lastName" className="input" placeholder="Last Name:" ref={(input) =>this._lName = input} /><br />

                        <input id="company" className="input" placeholder="Company:" ref={(input) =>this._company = input} /><br />

                        <input id="email" className="input" placeholder="Email Address:" ref={(input) =>this._email = input} /><br />

                        <input id="phone-number" className="input" placeholder="Phone Number:" ref={(input) =>this._phone = input} /><br />

                        <input id="img-url" className="input" placeholder="Link to Thumbnail Image (URL):" ref={(input) =>this._imgUrl = input}/><br /><br />
                    </div>
                    <div className="contact-form-actions">
                        <button type="submit">
                            Save Contact
                        </button>
                    </div>
                </form>

            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();


        let fName = this._fName;
        let lName = this._lName;
        let company = this._company;
        let email = this._email;
        let phone = this._phone;
        let imgUrl = this._imgUrl;

        this.props.addContact(fName.value, lName.value, company.value, email.value, phone.value, imgUrl.value);


    }


}



export default ContactForm;