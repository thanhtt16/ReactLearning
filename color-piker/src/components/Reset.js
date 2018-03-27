import React, {Component} from 'react';

class Reset extends Component {
    resetState(){
        this.props.onResetState()
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={()=>{this.resetState()}}>reset</button>
        );
    }
}

export default Reset;
