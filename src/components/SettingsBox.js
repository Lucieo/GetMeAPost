import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {getRndInteger} from 'helpers';

import {FaCamera, FaQuestionCircle} from 'react-icons/fa';
import {MdChatBubble} from 'react-icons/md';

import {StyledButton, StyledButtonWrapper} from 'components/StyledButton';
import {StyledMainTitle, StyledSecondTitle, StyledText} from 'components/StyledTexts';
import {SettingsWrapper} from 'components/StyledWrappers';

import styled from 'styled-components';
const StyledTextArea = styled.textarea`
  background-color:white;
  min-height:100px;
  width:100%;
  border-radius: 5px;
  border-color: lightgray;
  margin:10px;
`;




class SettingsBox extends Component {
  state={
    comment:''
  };

  handleChange =(event)=>{
    this.setState({comment:event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.saveText(this.state.comment);
    this.setState({comment:''});

  };

  handleImageFetch = ()=>{
    if(this.props.imagesList && this.props.imageId+1<this.props.imagesList.length-1){
      this.props.changeImage();
    }
    else{
      let pageIndex = -1;
      if(!this.props.imagePageIndex){
        pageIndex = getRndInteger(0,34)
      }
      else if(this.props.imagePageIndex && this.props.imagePageIndex+1<35){
        pageIndex = this.props.imagePageIndex
      }
      this.props.fetchImages(pageIndex)
    }
  }

  render(){
    return(
      <SettingsWrapper>
        <StyledMainTitle>Get Me A Post!</StyledMainTitle>
        <StyledText>a simple post generator for overworked influencers </StyledText>
        <StyledButtonWrapper>
          <StyledButton className="fetch-comments" onClick={this.handleImageFetch}>
            Get me an Image <FaCamera/>
          </StyledButton>
        </StyledButtonWrapper>

        <form onSubmit={this.handleSubmit}>
          <StyledTextArea
            placeholder="Type your comment here..."
            onChange={this.handleChange}
            value={this.state.comment}
            maxLength='2200'
          />
          <StyledButtonWrapper>
            <StyledButton>Submit my comment <MdChatBubble/></StyledButton>
          </StyledButtonWrapper>
        </form>
        <StyledSecondTitle>No inspiration? </StyledSecondTitle>
        <StyledButtonWrapper>
          <StyledButton className="fetch-comments" onClick={this.props.fetchText}>
            Fetch me a comment <FaQuestionCircle/>
          </StyledButton>
        </StyledButtonWrapper>
      </SettingsWrapper>
    )
  }

}


function mapStateToProps(state){
  console.log(state);
  return {...state.post};
}

export default connect(mapStateToProps, actions)(SettingsBox);
