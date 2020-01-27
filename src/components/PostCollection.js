import React, {Component} from 'react';
import {connect} from 'react-redux';
import instaMockup from 'media/insta.png';
import * as actions from 'actions';
import {StyledSecondTitle} from 'components/StyledTexts';
import {CollectionWrapper} from 'components/StyledWrappers';


class PostCollection extends Component {
  renderSavedPosts=()=>{
    return this.props.savedPosts.map((data, key) => {
      return (
        <li key={key}>{data.imageText}</li>
      )
    })
  }

  pickTitle = ()=>{
    const postsNumber = this.props.savedPosts.length
    if(postsNumber>5 && postsNumber<=10){
      return 'Impressive Collection!';
    }
    else if(postsNumber>10 && postsNumber<=20){
      return 'You\'ve been knighted Insta Master!';
    }
    else if(postsNumber>20){
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
        {this.renderSavedPosts()}
      </CollectionWrapper>
    )
  }
};

function mapStateToProps(state){
  return {...state.post};
}

export default connect(mapStateToProps, actions)(PostCollection);
