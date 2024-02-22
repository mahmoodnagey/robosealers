import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/auth/slice/user-slice";
import menuReducer from "../src/design-system/components/Header/slice/menuSlice";
import settingModalReducer from "../src/design-system/components/SettingControl/slice/settingModalSlice";
import authReducer from "../src/auth/slice/authSlice";
import rolesList from "../src/roles/slice/rolesListSlice";
import showRoleModal from "../src/roles/slice/show-role-modal-slice";
import editRoleModal from "../src/roles/slice/edit-role-modal-slice";
import adminList from "../src/admin/slice/adminsListSlice";
import editAdminModal from "../src/admin/slice/edit-admin-modal-slice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    settingModal: settingModalReducer,
    showRoleModal: showRoleModal,
    editRoleModal: editRoleModal,
    user: userReducer,
    auth: authReducer,
    rolesList: rolesList,
    adminList: adminList,
    editAdminModal: editAdminModal,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
