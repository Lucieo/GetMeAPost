import React from 'react';
import {mount} from 'enzyme';
import PostCollection from 'components/PostCollection';
import PostItem from 'components/PostItem';
import Root from 'root';

let wrapped;
const basePost = {imageUrl:'imageurl-PostCollectionTest',imageText:'myText-PostCollectionTest'};



afterEach(()=>{
  wrapped.unmount();
});

describe('4 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(4).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <PostCollection/>
      </Root>
    );
  });
  it('creates a post item for each saved post', ()=>{
    expect(wrapped.find(PostItem).length).toEqual(4);
  });
  it('shows adapted message', ()=>{
    expect(wrapped.render().text()).toContain('Taking it one post at a time.')
  })
});

describe('8 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(8).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <PostCollection/>
      </Root>
    );
  });
  it('shows adapted message', ()=>{
    expect(wrapped.render().text()).toContain('Impressive Collection!')
  })
});

describe('12 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(12).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <PostCollection/>
      </Root>
    );
  });
  it('shows adapted message', ()=>{
    expect(wrapped.render().text()).toContain('You\'ve been knighted Insta Master!')
  })
});

describe('20 posts in memory', ()=>{
  beforeEach(()=>{
    const initialState = {post : {savedPosts:Array(20).fill(basePost)}};
    wrapped = mount(
      <Root initialState={initialState}>
        <PostCollection/>
      </Root>
    );
  });
  it('shows adapted message', ()=>{
    expect(wrapped.render().text()).toContain('OMG get a life...')
  })
});
