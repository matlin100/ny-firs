import React, { Component } from 'react';

class Text extends Component {
    a= "<div>  altitude : {this.props.altitude}   HIS : {this.props.hsi}   ADI : {this.props.adi} </div>";

style={
    textAlign: 'center',
    color:'red'
}
add(){}
    render() { 
        return (
           <div style={this.style}> altitude : {this.props.altitude}   HIS : {this.props.hsi}   ADI : {this.props.adi}</div>
        );
    } 
}
export default Text;