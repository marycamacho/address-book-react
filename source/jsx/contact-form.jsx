import React from 'react';

class ContactDetails extends React.Component {
    
    
    
    
    render() {
        return (
            <div>
                <button className='btn' id="contact-submit-button" type="submit" value="Save Contact">Save Contact </button>

                <form id="contact_form"  >
                    <div class="row">
                        <label for="fname">First name:</label><br />
                        <input id="firstName" class="input" name="firstName" type="text" value="" size="30" /><br />
                    </div>
                    <div class="row">
                        <label for="lname">Last name:</label><br />
                        <input id="lastName" class="input" name="lastName" type="text" value="" size="30" /><br />
                    </div>
                    <div class="row">
                        <label for="company">Company:</label><br />
                        <input id="company" class="input" name="company" type="text" value="" size="30" /><br />
                    </div>
                    <div class="row">
                        <label for="email">Email:</label><br />
                        <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
                    </div>
                    <div class="row">
                        <label for="phone-number">Phone Number</label><br />
                        <input id="phone-number" class="input" name="phone-number" rows="7" cols="30"></input><br /><br />
                    </div>
                </form>


            </div>
        );
    }
}



export default ContactDetails;