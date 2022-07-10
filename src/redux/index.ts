import { compose, configureStore } from '@reduxjs/toolkit';

import { statusReducer } from '@/redux/status';
import { workoutsReducer } from '@/redux/workouts';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
    status: statusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
