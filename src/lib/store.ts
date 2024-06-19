import { configureStore } from '@reduxjs/toolkit';
import tabSelectorSlice from './features/tabSelector/tabSelectorSlice';
import userSlice from './features/user/userSlice';
import usersSlice from './features/users/usersSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			tab: tabSelectorSlice,
			user: userSlice,
			users: usersSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
