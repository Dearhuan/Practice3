import * as Actiontyps from './ActionsTyps'
export const increment = (counterCaption) =>{
  return {
    type: Actiontyps.INCREMENT,
    counterCaption: counterCaption
  }
}
export const decrement = (counterCaption) =>{
  return {
    type: Actiontyps.DECREMENT,
    counterCaption: counterCaption
  }
}