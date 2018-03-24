import axios from 'axios';

/*----------  INITIAL STATE  ----------*/
const initialState = {
  showNav: false
};


/*----------  ACTION TYPES  ----------*/
const IS_AUTH_USER = 'IS_AUTH_USER';


/*----------  ACTION CREATORS  ----------*/
export const rsvpOkay = () => ({
  type: IS_AUTH_USER,
  payload: true
});


/*----------  THUNKS  ----------*/
// export const loadAllCategories = () => dispatch => {
//    axios.get('/api/categories')
//    .then(res => dispatch(receiveAllCategories(res.data)))
//    .catch( (err) => console.error(err));
// };


/*----------  REDUCER  ----------*/
export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH_USER:
      return Object.assign({}, state, {
        showNav: action.payload
      });
    default: return state;
  }
};
