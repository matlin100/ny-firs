import React, { Component } from 'react';

class His extends Component {
    state = { a:0 } 
   
    style ={
        height: '270px',
        width: '270px',
        marginLeft: '80px',
        marginTop:'60px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,15,0)',
        transform: 'rotate('+-this.props.hsi+'deg)',
        borderStyle: 'solid',
        borderColor: 'white',
        boxShadow:' 5px 10px 18px #888888',
    }
style1={textAlign: 'center'};
style2={
     lineHeight:'9',
     wordSpacing: '200px',
    };
style3={
    lineHeight:'1',
    textAlign: 'center',
}    

    render() { 
        console.log(this.props.hsi);
        return (
        <div style={this.style}>
          <p style={this.style1}>0 </p>
          <p style={this.style2}>270 90</p>
          <p style={this.style3}> 180</p>
        </div>
       
        );
    }
}
 
export  default His;