import React, {Component} from 'react';


class Numbers extends Component {
    render() {
        return (
            <div className="col-sm-1">
                <p>{this.props.name}</p>
            </div>
        )
    };
};

export default Numbers