var React = require("react");

var RandomGenerator = React.createClass({
    render: function() {
        "use strict";
        return (<div className="randGen" onClick={this.refreshRandomNumber}>
            {this.props.value},
            {this.state.result}
        </div>);
    },

    //custom
    genNewRand: function() {
        "use strict";
        return Math.floor(Math.random() * 6)+1;
    },

    //custom
    refreshRandomNumber: function(){
        "use strict";
        this.setState({
            result: this.genNewRand()
        });
    },

    getInitialState: function () {
        "use strict";
        return {
            result: this.genNewRand()

        };
    },
    getDefaultProps: function () {
        return {
            image: "questionmark.png"
        }
    }

});

module.exports = RandomGenerator;