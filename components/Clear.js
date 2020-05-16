import React from "react"

class Clear extends React.Component {
    render() {
        return (
            <div onClick={() => {this.props.handleClear()}} className = "clear-btn">
                {this.props.num}
            </div>
        )
    }
}

export default Clear