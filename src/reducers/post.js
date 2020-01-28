import {
  SAVE_TEXT,
  FETCH_IMAGE,
  CHANGE_IMAGE,
  SAVE_POST,
  DELETE_POST
} from 'actions/types'

export default function(state={}, action){
  switch(action.type){
    case SAVE_TEXT :
      return {...state, imageText:action.payload};

    case FETCH_IMAGE:
      const firstImageUrl = cleanFormat(action.payload[0].download_url)
      return {...state,
        imagesList : action.payload,
        imageId:0,
        imageUrl:firstImageUrl,
        imagePageIndex:action.imagePageIndex
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
