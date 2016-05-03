import React from 'react';
import ShortContact from './short-contact.jsx';




class ContactList extends React.Component {

    _getContacts() {
        "use strict";

        let contacts  = this.props.contacts;

        console.log(contacts);

        return contacts.map((contact) => {
            "use strict";
            return (
                <ShortContact contact={contact} key={contact.id}/>)
        })
    }

    render() {

        let contacts = this._getContacts();

        let title = contacts.length > 1 ? `${contacts.length} contacts` : contacts.length === 1 ? '1 contact' : 'No Contacts';


        return (
            <div>
                <h3>List of Contacts</h3>
                <h4 className="contact-count">{title}</h4>
                <ul className="contact-list">
                    {contacts}
                </ul>
            </div>
        );
    }
}

export default ContactList;
