import { LOAD_USERS, SET_LOADING } from './actions';

const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
