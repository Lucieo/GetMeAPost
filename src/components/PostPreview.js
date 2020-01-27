import React, {Component} from 'react';
import {connect} from 'react-redux';
import instaMockup from 'media/insta.png';

class PostPreview extends Component {
  render(){
    return(
      <div style={{maxWidth:350, boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius:3, padding:10}}>
        <div style={{backgroundImage: `url(${this.props.imageUrl})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPositionX: 10}}>
          <img src={instaMockup} style={{maxWidth:'100%'}} alt="Logo" />
        </div>
        <p style={{padding:'0px 20px', fontFamily: 'Open Sans, sans-serif', fontSize:'small', color:'#4D4D4F'}}>{this.props.imageText || "GetMeAText!"}</p>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {...state.post};
}

export default connect(mapStateToProps)(PostPreview);
