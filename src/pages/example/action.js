export default const constants = {
  SET_DATA: 'SET_DATA'
};

export const setData = payload => ({ type: constants.SET_DATA, payload });
// 
// export default Object.assign({}, constants, {
//   setData
// });
