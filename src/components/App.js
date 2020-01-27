import React from 'react';
import SettingsBox from 'components/SettingsBox';
import PostPreview from 'components/PostPreview';
import {AppWrapper} from 'components/StyledWrappers';




export default ()=>{
  return(
    <AppWrapper>
      <SettingsBox/>
      <PostPreview/>
    </AppWrapper>
  )
}
