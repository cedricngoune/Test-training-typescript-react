import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "../Infrastructure/redux/event/eventSlice";

export const rootReducer = combineReducers({
  reducer: combineReducers({
    [eventsSlice.name]: eventsSlice.reducer,
  }),
});
export const createStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      [eventsSlice.name]: eventsSlice.reducer,
    }),
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
