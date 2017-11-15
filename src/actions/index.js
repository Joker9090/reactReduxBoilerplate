import types from './types';

let mockdata = [
  {id: 1, name: "juan"},
  {id: 2, name: "martin"}
]

export function getAll(){
  return {
    type: types.ALL,
    payload: { items: mockdata }
  }
}

export function add(){
  return {
    type: types.ADD,
    payload: {}
  }
}
export function remove(){
  return {
    type: types.REMOVE,
    payload: {}
  }
}
export function edit(){
  return {
    type: types.EDIT,
    payload: {}
  }
}
