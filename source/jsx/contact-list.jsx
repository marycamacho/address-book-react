import React from 'react';
import ShortContact from './short-contact.jsx';


class ContactList extends React.Component {
    render() {
        return (
            <div>
                <h3>List of Contacts</h3>
                <ul className=" contact-list">
                    <li className="well whiteBG  contact-short-li">
                        <ShortContact
                            thumb="http://brainstorminonline.com/wp-content/uploads/2011/12/Mary-Camacho.jpg" fName="Mary"/>
                    </li>
                    <li className="well whiteBG  contact-short-li">
                        <ShortContact
                            thumb="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASXAAAAJDFjZGI0ZTZmLWI1ZjYtNDU1ZS1iYzE3LTJmYjc0N2JkNGFmYw.jpg" fName="Matthew"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactList;
