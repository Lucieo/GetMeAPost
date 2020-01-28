import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';
import {PreviewBgImg} from 'components/StyledWrappers';
import PostItem from 'components/PostItem';

afterEach(()=>{
  moxios.uninstall();
});


describe('Comment Fetch', ()=>{
  beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://uselessfacts.jsph.pl/random.json?language=en', {
      status: 200,
      response: {text:'test fetched text'}
    });
  });
  it('can fetch a comment and display it in preview', (done)=>{
    const wrapped = mount(
      <Root>
        <App/>
      </Root>
    )
    wrapped.find('button.fetch-comments').simulate('click');
    moxios.wait(()=>{
      wrapped.update();
      expect(wrapped.render().text()).toContain('test fetched text')
      done(); //set test as finished
      wrapped.unmount();
    }, 200);
  });
});


describe('Image Fetch', ()=>{
  beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://picsum.photos/v2/list?page=10', {
      status: 200,
      response: [{download_url:'https://page10/image1/600/600'}]
    });
  });
  it('fetches new image list and display first in preview when reaching end of imageList', (done)=>{
    const initialState={
      post:{
        imagePageIndex:9,
        imagesList:[
          {download_url:'https://page9/image1/600/600'},
          {download_url:'https://page9/image2/600/600'}
        ],
        imagesId:1
      }
    }
    const wrapped = mount(
      <Root initialState={initialState}>
        <App/>
      </Root>
    )
    wrapped.find(PreviewBgImg).prop("image")
    wrapped.find('button.fetch-image').simulate('click');
    moxios.wait(()=>{
      wrapped.update();
      expect(wrapped.find(PreviewBgImg).prop("image")).toEqual('https://page10/image1/400/400');
      done(); //set test as finished
      wrapped.unmount();
    }, 200);
  });
});

describe('Change image', ()=>{
  const initialState = {
    post : {
      imagesList:[
      {download_url:'https://page9/image1/600/600'},
      {download_url:'https://page9/image2/600/600'},
      {download_url:'https://page9/image3/600/600'},
      {download_url:'https://page9/image4/600/600'}
    ],
    imageId:1,
    imageUrl:'https://page9/image2/400/400'
    }
  };
  const wrapped = mount(
    <Root initialState={initialState}>
      <App/>
    </Root>
  );

  it('changes image when clicking fetch image button', ()=>{
    expect(wrapped.find(PreviewBgImg).prop("image")).toEqual('https://page9/image2/400/400')
    wrapped.find('button.fetch-image').simulate('click');
    wrapped.update();
    expect(wrapped.find(PreviewBgImg).prop("image")).toEqual('https://page9/image3/400/400');
  });
});

describe('Post deletion', ()=>{
  const initialState = {
    post : {
      savedPosts:[
      {
        imageUrl:'https://page9/image1/600/600',
        imageText:"Text1"
      },
      {
        imageUrl:'https://page9/image2/600/600',
        imageText:'Text2'
      },
      {
        imageUrl:'https://page9/image3/600/600',
        imageText:'Text3'
      }
    ],
    }
  };
  const wrapped = mount(
    <Root initialState={initialState}>
      <App/>
    </Root>
  );

  it('deleting post when clicking deleting post button', ()=>{
    wrapped.find('.delete-btn').first().simulate('click');
    wrapped.update();
    expect(wrapped.find(PostItem).length).toEqual(2);
    expect(wrapped.render().text()).toContain('Text2');
    expect(wrapped.render().text()).toContain('Text3');
  });
});
