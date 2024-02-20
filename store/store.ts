import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/auth/slice/user-slice";
import menuReducer from "../src/design-system/components/Header/slice/menuSlice";
import settingModalReducer from "../src/design-system/components/SettingControl/slice/settingModalSlice";
import authReducer from "../src/auth/slice/authSlice";
import rolesList from "../src/roles/slice/rolesListSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    settingModal: settingModalReducer,
    user: userReducer,
    auth: authReducer,
    rolesList: rolesList,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
