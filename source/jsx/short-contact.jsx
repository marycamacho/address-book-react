import React from 'react';


class ShortContact extends React.Component {
    render() {
        return (
            <div className="contact-short">
                <img className="contact-short-thumb" src={this.props.thumb}/>
                <div className="contact-short-name">{this.props.fName}</div>
                
ß
            </div>
        );
    }
}



export default ShortContact;