import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {InstaCaption, StyledText} from 'components/StyledTexts';
import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';
import {PostItemsImageBg} from 'components/StyledWrappers';

const PostWrapper = styled.div`
  box-shadow : 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
  border-radius: 2px;
  height:100%;
`;

const PostSpacer = styled.div`
  padding:1%;
  width:23%;
  @media (max-width: 810px) {
      width: 31%;
  }
  @media (max-width: 530px) {
      width: 47%;
  }
  @media (max-width: 400px) {
      width: 98%;
  }
`;

const TitleWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0px 15px;
`;



const PostItem = (props)=>{
  return(
    <PostSpacer>
      <PostWrapper>
        <TitleWrapper>
          <StyledText>Post #{parseInt(props.postId)+1}</StyledText>
          <AiFillDelete
          style={{cursor:'pointer'}}
          onClick={()=>props.deletePost(props.postId)}
          className="delete-btn"
          />
        </TitleWrapper>
        <PostItemsImageBg image={props.image}></PostItemsImageBg>
        <InstaCaption>{props.text}</InstaCaption>
      </PostWrapper>
    </PostSpacer>
  )
}

export default connect(null, actions)(PostItem);
