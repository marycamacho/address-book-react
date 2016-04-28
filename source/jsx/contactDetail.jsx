var React = require('react');

var Contact = React.createClass({

    render: function () {
        return(<div>
            {this.props.companyName},
            {this.props.firstName},
            {this.props.lastName},
            {this.props.eMail},
        </div>)
    }
});

module.exports = Contact;