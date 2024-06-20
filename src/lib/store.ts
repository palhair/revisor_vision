import { configureStore } from '@reduxjs/toolkit';
import tabSelectorSlice from './features/tabSelector/tabSelectorSlice';
import usersSlice from './features/users/usersSlice';
import usersAlbumsSlice from './features/albums/albumsSlice';
import photosSlice from './features/photos/photosSlice';
import favoritePhotosSlice from './features/favoritePhotos/favoritePhotosSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			tab: tabSelectorSlice,
			users: usersSlice,
			usersAlbums: usersAlbumsSlice,
			photos: photosSlice,
			favoritePhotos: favoritePhotosSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
