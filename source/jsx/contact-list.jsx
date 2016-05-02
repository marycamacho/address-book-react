import React from 'react';
import ShortContact from './short-contact.jsx';




class ContactList extends React.Component {

    _getContacts() {

        let contactList = [
            {
                id: 1,
                fName: "Mary",
                lName: "Camacho",
                imgUrl: "http://brainstorminonline.com/wp-content/uploads/2011/12/Mary-Camacho.jpg",
                email: "mary@marycamacho.com",
                phone: "303-669-6516"
            },
            {
                id: 2,
                fName: "Matthew",
                lName: "Nichols",
                imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASXAAAAJDFjZGI0ZTZmLWI1ZjYtNDU1ZS1iYzE3LTJmYjc0N2JkNGFmYw.jpg",
                email: "matthew@matthew-nichols.com",
                phone: "720-299-7215"
            },
            {
                id: 3,
                fName: "Number",
                lName: "Three",
                imgUrl: "http://3.bp.blogspot.com/-iYgp2G1mD4o/TssPyGjJ4bI/AAAAAAAAGl0/UoweTTF1-3U/s1600/Number+3+Coloring+Pages+14.gif",
                email: "three@marycamacho.com",
                phone: "333-333-3333"
            }
        ];

        return contactList.map((contact) => {
            "use strict";
            return (
                <ShortContact contact={contact} key={contact.id}/>)
        });
    }

    _getContactsTitle (contactCount) {
        if(contactCount === 0) {
            return 'No Contacts';
        } else if (contactCount === 1) {
            return '1 contact';
        } else {
            return `${contactCount} contacts`;
        }
    }

    render() {

        const contacts  = this._getContacts();


        return (
            <div>
                <h3>List of Contacts</h3>
                <h4 className="contact-count">
                    {this._getContactsTitle((contacts.length))}</h4>
                <ul className="contact-list">
                    {contacts}
                </ul>
            </div>
        );
    }
}

export default ContactList;
