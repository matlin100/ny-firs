import React, { Component } from 'react';

class Adi extends Component {
    state = { a:180 } 
    style ={
        height: '270px',
        width: '270px',
        marginLeft: '80px',
        marginTop:'60px',
        backgroundColor: 'white',
        borderRadius: '50%',
        backgroundColor: 'blue',
        backgroundImage: 'conic-gradient(   blue 0deg '+(this.props.adi)+'deg,  green 0deg 360deg)',
        borderStyle: 'solid',
        borderColor: 'white',
        boxShadow:' 5px 10px 18px #888888',
}

    
    render() { 
        console.log(this.props.adi);
        return (
        <div style={this.style}></div>
        );
    }
    
}
 
export default Adi;