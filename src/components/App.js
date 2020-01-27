import React, {Component} from 'react';
import SettingsBox from 'components/SettingsBox';
import PostPreview from 'components/PostPreview';
import PostCollection from 'components/PostCollection';
import {PostFactoryWrapper, AppWrapper} from 'components/StyledWrappers';
import {connect} from 'react-redux';




class App extends Component{
  render(){
    console.log(this.props.savedPosts)
    return(
      <AppWrapper>
        <PostFactoryWrapper>
          <SettingsBox/>
          <PostPreview/>
        </PostFactoryWrapper>
        {this.props.savedPosts &&
          <PostCollection/>
        }
      </AppWrapper>
    )
  }
}

function mapStateToProps(state){
  return {savedPosts:state.post.savedPosts};
}

export default connect(mapStateToProps,)(App);
