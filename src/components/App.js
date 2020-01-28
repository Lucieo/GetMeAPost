import React from 'react';
import SettingsBox from 'components/SettingsBox';
import PostPreview from 'components/PostPreview';
import PostCollection from 'components/PostCollection';
import {PostFactoryWrapper, WarningWrapper} from 'components/StyledWrappers';
import GoBackToWork from 'components/GoBackToWork';
import {connect} from 'react-redux';




const App = (props)=>{
    return(
      <>
        {
          (props.savedPosts && props.savedPosts.length>15)
          ?
            <WarningWrapper>
              <GoBackToWork/>
            </WarningWrapper>
          :
            <PostFactoryWrapper>
              <SettingsBox/>
              <PostPreview/>
            </PostFactoryWrapper>
        }
        {(props.savedPosts && props.savedPosts.length>0)&&
          <PostCollection/>
        }
      </>
    )
}

function mapStateToProps(state){
  return {savedPosts:state.post.savedPosts};
}

export default connect(mapStateToProps,)(App);
