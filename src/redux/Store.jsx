import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './Home/HomeSlice';
import detailsReducer from './Details/DetailsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
});

export default store;
