import React from 'react';
import ContactList from './contact-list.jsx';
import ContactForm from './contact-form.jsx';
import ShortContact from './short-contact.jsx';

class AddressBook extends React.Component {

    constructor() {
        "use strict";
        super();

        this.state = {
            showContacts: true,
            contacts: [
                {
                    id: 1,
                    fName: "Mary",
                    lName: "Camacho",
                    company: " ",
                    email: "mary@marycamacho.com",
                    phone: "303-669-6516",
                    imgUrl: "http://brainstorminonline.com/wp-content/uploads/2011/12/Mary-Camacho.jpg"
                },
                {
                    id: 2,
                    fName: "Matthew",
                    lName: "Nichols",
                    company: " ",
                    email: "matthew@matthew-nichols.com",
                    phone: "720-299-7215",
                    imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASXAAAAJDFjZGI0ZTZmLWI1ZjYtNDU1ZS1iYzE3LTJmYjc0N2JkNGFmYw.jpg"
                },
                {
                    id: 3,
                    fName: "Number",
                    lName: "Three",
                    company: " ",
                    email: "three@marycamacho.com",
                    phone: "333-333-3333",
                    imgUrl: "http://3.bp.blogspot.com/-iYgp2G1mD4o/TssPyGjJ4bI/AAAAAAAAGl0/UoweTTF1-3U/s1600/Number+3+Coloring+Pages+14.gif",
                }
            ]
        };

    }


    render() {
        "use strict";
        let contacts = this.state.contacts;
        
        return (
            <div className="row address-book">
                
                <div className="col-md-6">
                    <ContactList contacts={contacts}  />
                </div>
                <div className="col-md-6">

                    <button className='btn' id="contact-submit-button" type="submit" value="Create Contact">Create New Contact </button>



                    <div>
                        <ContactForm  addContact={this._addContact.bind(this)}/>
                    </div>
                </div>
            </div>

        );

    }

    _addContact (fName, lName, company, email, phone, imgURL) {
        "use strict";
        const contact = {
            id: this.state.contacts.length + 1,
            fName,
            lName,
            company,
            email,
            phone,
            imgURL
        };
        this.setState({ contacts: this.state.contacts.concat([contact]) });
    }

    


}

export default AddressBook;