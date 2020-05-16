import React from "react"

class Input extends React.Component {
    render() {
        return (
            <div className = "input">
                {this.props.in}
            </div>
        )
    }
}

export default Input