import React from 'react';
import {mount} from 'enzyme';
import App from 'components/App';
import Root from 'root';

import SettingsBox from 'components/SettingsBox';
import PostPreview from 'components/PostPreview';
import PostCollection from 'components/PostCollection';
import GoBackToWork from 'components/GoBackToWork';

let wrapped;
const basePost = {imageUrl:'imageurl',imageText:'myText'};

afterEach(()=>{
  wrapped.unmount();
});


describe('0 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:[]}};
    wrapped = mount(
      <Root initialState={initialState}>
        <App/>
      </Root>
    );
  });
  it('shows setting box and post preview', ()=>{
    expect(wrapped.find(SettingsBox).length).toEqual(1);
    expect(wrapped.find(PostPreview).length).toEqual(1);
  });
});

describe('2 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(2).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <App/>
      </Root>
    );
  });
  it('shows setting box and post preview', ()=>{
    expect(wrapped.find(SettingsBox).length).toEqual(1);
    expect(wrapped.find(PostPreview).length).toEqual(1);
  });
  it('shows a post collection', ()=>{
    expect(wrapped.find(PostCollection).length).toEqual(1);
  })
});

describe('30 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(30).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <App/>
      </Root>
    );
  });
  it('shows go back to work message', ()=>{
    expect(wrapped.find(GoBackToWork).length).toEqual(1);
  });
  it('shows a post collection', ()=>{
    expect(wrapped.find(PostCollection).length).toEqual(1);
  })
});
