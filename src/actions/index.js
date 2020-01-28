import axios from 'axios';
import {
  SAVE_TEXT,
  FETCH_IMAGE,
  CHANGE_IMAGE,
  SAVE_POST,
  DELETE_POST
} from 'actions/types';
import {shuffleArray} from 'helpers';

export function saveText(text){
  return {
    type: SAVE_TEXT,
    payload: text
  };
}

export function fetchText(){
  return axios.get('https://uselessfacts.jsph.pl/random.json?language=en').then(
    response =>{
      return {
        type : SAVE_TEXT,
        payload : response.data.text
      }
    }
  );
}

export function fetchImages(imagePageIndex){
  return axios.get(`https://picsum.photos/v2/list?page=${imagePageIndex+1}`).then(response=>{
    return {
      type : FETCH_IMAGE,
      payload : shuffleArray(response.data),
      imagePageIndex : imagePageIndex+1
    }
  });
}

export function changeImage(){
  return {
    type : CHANGE_IMAGE
  }
}

export function savePost(){
  return {
    type : SAVE_POST
  }
}

export function deletePost(postId){
  return{
    type:DELETE_POST,
    payload:postId
  }
}
