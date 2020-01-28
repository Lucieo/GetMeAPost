import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import {StyledSecondTitle} from 'components/StyledTexts';
import {CollectionWrapper} from 'components/StyledWrappers';
import PostItem from 'components/PostItem';
import styled from 'styled-components';

const PostsList = styled.div`
display: flex;
flex-wrap:wrap;
text-align: center;
max-width: 1000px;
margin: 0 auto;
`;

class PostCollection extends Component {
  renderSavedPosts=()=>{
    return this.props.savedPosts.map((data, key) => {
      return (
        <PostItem
          image={data.imageUrl}
          text={data.imageText}
          key={key}
          postId={key}
        />
      )
    })
  }

  pickTitle = ()=>{
    const postsNumber = this.props.savedPosts.length
    if(postsNumber>4 && postsNumber<=8){
      return 'Impressive Collection!';
    }
    else if(postsNumber>8 && postsNumber<=12){
      return 'You\'ve been knighted Insta Master!';
    }
    else if(postsNumber>12){
      return 'OMG get a life...';
    }
    else {
      return 'Taking it one post at a time.';
    }
  }

  render(){
    return(
      <CollectionWrapper>
        <StyledSecondTitle>{this.pickTitle()}</StyledSecondTitle>
        <PostsList>
          {this.renderSavedPosts()}
        </PostsList>
      </CollectionWrapper>
    )
  }
};

function mapStateToProps(state){
  return {...state.post};
}

export default connect(mapStateToProps, actions)(PostCollection);
