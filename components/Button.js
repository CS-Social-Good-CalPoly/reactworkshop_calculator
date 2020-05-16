import React from "react";

class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={() => this.props.handleClick(this.props.num)}>
                {this.props.num}
            </div>
        );
    }
}

export default Button;