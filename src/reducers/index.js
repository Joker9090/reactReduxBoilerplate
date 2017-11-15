import types from './../actions/types';

const DEFAULT = {
  items:[]
}

export default function(state = DEFAULT, action){
  switch (action.type) {
    case types.ALL:
      return Object.assign({} , state, action.payload )
    break;
    case types.ADD:
      return Object.assign({} , state, action.payload )
    break;
    case types.REMOVE:
      return Object.assign({} , state, action.payload )
    break;
    case types.EDIT:
      return  Object.assign({} , state, action.payload )
    break;
    default:
      return state;
  }
}
