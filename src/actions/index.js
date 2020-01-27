import axios from 'axios';
import {SAVE_TEXT, FETCH_TEXT, FETCH_IMAGE, CHANGE_IMAGE} from 'actions/types';

export function saveText(text){
  return {
    type: SAVE_TEXT,
    payload: text
  };
}

export function fetchText(){
  return axios.get('https://uselessfacts.jsph.pl/random.json?language=en').then(
    response =>{
      console.log(response)
      return {
        type : FETCH_TEXT,
        payload : response.data.text
      }
    }
  );
}

export function fetchImages(){
  return axios.get('https://picsum.photos/v2/list').then(response=>{
    return {
      type : FETCH_IMAGE,
      payload : response.data
    }
  });
}

export function changeImage(){
  return {
    type : CHANGE_IMAGE
  }
}
