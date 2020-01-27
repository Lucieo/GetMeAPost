import {SAVE_TEXT, FETCH_TEXT, FETCH_IMAGE, CHANGE_IMAGE} from 'actions/types'

export default function(state={}, action){
  switch(action.type){
    case SAVE_TEXT :
      return {...state, imageText:action.payload};

    case FETCH_TEXT:
      const fetchedText = action.payload;
      console.log(fetchedText)
      return {...state, imageText : fetchedText};

    case FETCH_IMAGE:
      const firstImageUrl = cleanFormat(action.payload[0].download_url)
      return {...state, imagesList : action.payload, imageId:0, imageUrl:firstImageUrl}

    case CHANGE_IMAGE:
      const imageUrl = cleanFormat(state.imagesList[state.imageId+1].download_url)
      return {...state, imageId:state.imageId+1, imageUrl:imageUrl}

    default:
      return state;
  }
}

function cleanFormat(url){
  let cleanedUrl = url.split(/(?<!\/)\/(?!\/)/);
  cleanedUrl.splice(-2,2);
  cleanedUrl=cleanedUrl.join('/')+'/600/600';
  return cleanedUrl
}
