import React, {Component} from 'react';
import {connect} from 'react-redux';
import instaMockup from 'media/insta.png';
import * as actions from 'actions';
import {PreviewWrapper} from 'components/StyledWrappers';
import {BorderStyledButton, StyledButtonWrapper} from 'components/StyledButton';
import {InstaCaption} from 'components/StyledTexts';

class PostPreview extends Component {
  render(){
    return(
      <PreviewWrapper>
        <div style={{backgroundImage: `url(${this.props.imageUrl})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPositionX: 10}}>
          <img src={instaMockup} style={{maxWidth:'100%'}} alt="Logo" />
        </div>
        <InstaCaption>{this.props.imageText || "GetMeAText!"}</InstaCaption>
        {
          (this.props.imageText && this.props.imageUrl) &&
            <StyledButtonWrapper>
              <BorderStyledButton onClick={this.props.savePost}>
                Noice save that one!
              </BorderStyledButton>
            </StyledButtonWrapper>

        }
      </PreviewWrapper>
    )
  }
};

function mapStateToProps(state){
  return {...state.post};
}

export default connect(mapStateToProps, actions)(PostPreview);
