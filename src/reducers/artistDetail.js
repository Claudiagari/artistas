import foto4 from '../assets/claudia.jpg'
export default function (state = {name:'Claudia', bio:'programo aprendo react, mientras mas termino tech más sugar', url:foto4} , action){
  switch(action.type){
    case 'ARTIST_SELECTED':return action.payload;
  }
  return state;
}