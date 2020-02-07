import postReducer from 'reducers/post';
import {SAVE_TEXT,
  FETCH_IMAGE,
  CHANGE_IMAGE,
  SAVE_POST,
  DELETE_POST
} from 'actions/types';

const imagesList = [
  {download_url:'https://download_url1/test/500/600'},
  {download_url:'https://download_url2/test/500/600'}
]

const fechImageResponse = {
  data:[
    {download_url:'https://download_url/test/500/600'},
    {download_url:'https://download_url/test/500/600'}
  ]
}

it('handles actions with unknown type', ()=>{
  const newState = postReducer({}, {type:'LALALALAL'});
  expect(newState).toEqual({});
});

it('handle actions of type SAVE_TEXT', ()=>{
  const action = {
    type : SAVE_TEXT,
    payload : 'New Comment'
  };
  const newState = postReducer({}, action);
  expect(newState).toEqual({imageText:'New Comment'})
});

it('handle actions of type FETCH_IMAGE', ()=>{
  const action = {
    type : FETCH_IMAGE,
    payload : fechImageResponse,
    meta:{
      imagePageIndex:2
    },
  };
  const newState = postReducer({}, action);
  expect(newState.imagesList).toEqual(fechImageResponse.data);
  expect(newState.imageId).toEqual(0);
  expect(newState.imagePageIndex).toEqual(2);

});

it('handle actions of type CHANGE_IMAGE', ()=>{
  const action = {
    type : CHANGE_IMAGE
  };
  const newState = postReducer({imagesList, imageId:0}, action);
  expect(newState).toEqual({imagesList, imageId:1, imageUrl:'https://download_url2/test/400/400'})
});

it('handle actions of type SAVE_POST', ()=>{
  const action = {
    type : SAVE_POST
  };
  const post_info = {imageUrl:'https://myurl/400/400', imageText:'My image text'}
  const newState = postReducer(post_info, action);
  expect(newState).toEqual({savedPosts:[post_info], imageUrl:undefined, imageText: undefined});
});

it('handle actions of type DELETE_POST', ()=>{
  const action = {
    type : DELETE_POST,
    payload:2
  };
  const savedPosts = [
    {imageUrl:'https://myurl1/400/400', imageText:'My image text1'},
    {imageUrl:'https://myurl2/400/400', imageText:'My image text2'},
    {imageUrl:'https://myurl3/400/400', imageText:'My image text3'}
  ]
  const newState = postReducer({savedPosts}, action);
  expect(newState).toEqual({savedPosts:savedPosts.slice(0,-1)});
});
