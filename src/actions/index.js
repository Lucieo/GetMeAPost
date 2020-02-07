import axios from 'axios';
import {
  SAVE_TEXT,
  FETCH_TEXT,
  FETCH_IMAGE,
  CHANGE_IMAGE,
  SAVE_POST,
  DELETE_POST
} from 'actions/types';

let response;

export function saveText(text){
  return {
    type: SAVE_TEXT,
    payload: text
  };
}

export function fetchText(){
  response = axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
  return{
    type : FETCH_TEXT,
    payload : response
  }
}

export function fetchImages(imagePageIndex){
  response = axios.get(`https://picsum.photos/v2/list?page=${imagePageIndex+1}`)
  return {
    type : FETCH_IMAGE,
    payload : response,
    meta:{
      imagePageIndex : imagePageIndex+1
    }
  }
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
