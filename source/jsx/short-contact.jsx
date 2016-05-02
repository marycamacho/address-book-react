import React from 'react';



class ShortContact extends React.Component {


    render() {


        return (

            <div >
                <li className="contact-short well whiteBG">
                    <img  className="contact-short-thumb" src={this.props.contact.imgUrl}/>
                    <p className="contact-short-name">{this.props.contact.fName}</p><br />
                    <p className="contact-short-email">{this.props.contact.email}</p>
                </li>
            </div>

        );
    }
}

export default ShortContact;