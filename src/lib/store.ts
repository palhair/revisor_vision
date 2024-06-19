import { configureStore } from '@reduxjs/toolkit';
import tabSelectorSlice from './features/tabSelector/tabSelectorSlice';
import userSlice from './features/user/userSlice';
import usersSlice from './features/users/usersSlice';
import usersAlbumsSlice from './features/albums/albumsSlice';
import photosSlice from './features/photos/photosSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			tab: tabSelectorSlice,
			user: userSlice,
			users: usersSlice,
			usersAlbums: usersAlbumsSlice,
			photos: photosSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
