import { combineReducers } from 'redux';
import { SET_DATA } from './actions';

const initialState = {
  title: 'Welcome'
};

// 此处的function名称对应着页面组件中的state数据名称
function data(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        title: action.payload
      };

    default:
      return state;
  }
}

export default combineReducers({
  data
});
