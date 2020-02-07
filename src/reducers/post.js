import {
  SAVE_TEXT,
  FETCH_IMAGE,
  CHANGE_IMAGE,
  SAVE_POST,
  DELETE_POST,
  FETCH_TEXT
} from 'actions/types';
import {shuffleArray} from 'helpers';

export default function(state={}, action){
  switch(action.type){
    case SAVE_TEXT :
      return {...state, imageText:action.payload};

    case FETCH_TEXT:
      return {...state, imageText:action.payload.data.text};

    case FETCH_IMAGE:
      const imageList = shuffleArray(action.payload.data)
      const firstImageUrl = cleanFormat(imageList[0].download_url)
      return {...state,
        imagesList : imageList,
        imageId:0,
        imageUrl:firstImageUrl,
        imagePageIndex:action.meta.imagePageIndex
      }

    case CHANGE_IMAGE:
      const imageUrl = cleanFormat(state.imagesList[state.imageId+1].download_url)
      return {...state,
        imageId:state.imageId+1,
        imageUrl:imageUrl
      }

    case SAVE_POST:
      const newPost = {
        imageUrl:state.imageUrl,
        imageText:state.imageText
      }
      return {
        ...state,
        imageUrl:undefined,
        imageText:undefined,
        savedPosts : state.savedPosts? [...state.savedPosts, newPost] : [newPost]
      }

    case DELETE_POST:
      return{
        ...state,
        savedPosts:state.savedPosts.filter((post, index)=> index!==action.payload)
      }
    default:
      return state;
  }
}

function cleanFormat(url){
  let cleanedUrl = url.split(/(?<!\/)\/(?!\/)/);
  cleanedUrl.splice(-2,2);
  cleanedUrl=cleanedUrl.join('/')+'/400/400';
  return cleanedUrl
}
