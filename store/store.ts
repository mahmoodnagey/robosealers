import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/auth/slice/user-slice";
import menuReducer from "../src/designSystem/components/Header/slice/menuSlice";
import settingModalReducer from "../src/designSystem/components/TopRobotInfo/slice/settingModalSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    settingModal: settingModalReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
