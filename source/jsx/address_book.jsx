import React from 'react';
import ContactList from './contact-list.jsx';
import ContactDetails from './contact-form.jsx';

class AddressBook extends React.Component {
    render() {
        return (
            <div className="row">
                
                <div className="col-md-6">
                    <ContactList />
                </div>
                <div className="col-md-6">

                    <button className='btn' id="contact-submit-button" type="submit" value="Save Contact">Save Contact </button>
                    <h3 class="fiftyPercent">Contact Details</h3>


                    <div>
                        <ContactDetails />
                    </div>
                </div>
            </div>

        );

    }
}

export default AddressBook;