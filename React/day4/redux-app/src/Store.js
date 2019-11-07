import {
  createStore
} from 'redux';
import reducer from './Reducer';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
}

const store = createStore(reducer,initValues)

export default store