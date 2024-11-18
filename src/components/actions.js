import axios from 'axios';

export const LOAD_USERS = 'LOAD_USERS';
export const SET_LOADING = 'SET_LOADING';

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: LOAD_USERS, payload: response.data });
  } catch (error) {
    console.error('Error loading users:', error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
