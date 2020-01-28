import React, {Component} from 'react';
import {connect} from 'react-redux';
import instaMockup from 'media/insta.png';
import instaDefault from 'media/postImageDefault.png';
import * as actions from 'actions';
import {PreviewWrapper, PreviewBgImg} from 'components/StyledWrappers';
import {BorderStyledButton, StyledButtonWrapper} from 'components/StyledButton';
import {InstaCaption} from 'components/StyledTexts';

class PostPreview extends Component {
  render(){
    return(
      <PreviewWrapper>
        <PreviewBgImg image={this.props.imageUrl || instaDefault}>
          <img src={instaMockup} style={{maxWidth:'100%'}} alt="Logo" />
        </PreviewBgImg>
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
