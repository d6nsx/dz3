import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import MainPage from './pages/mainPage/MainPage';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
