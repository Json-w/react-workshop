const todoActions = {
  addItem: item => ({
    type: 'INCREMENT',
    payload: item,
  }),
  deleteItem: (index)=> ({
    type: 'DELETE',
    payload: index,
  }),
  updateItem: (index)=> ({
    type: 'UPDATE',
    payload: index,
  }),
  filterItem: (keyWord)=> ({
    type: 'FILTERDATA',
    payload: keyWord,
  }),
  // storeItems: ()=>(dispatch, getState)=> {
  //   localStorage.setItem('state', JSON.stringify(getState()));
  // },
  // initialItems: ()=>(dispatch, getState)=> {
  //   dispatch({
  //     type: 'INITIAL',
  //     payload: JSON.parse(localStorage.getItem('state')),
  //   });
  // }
  initialItems:(state)=>({
    type:'INITIAL',
    payload:state,
  }),
};
export default todoActions;
