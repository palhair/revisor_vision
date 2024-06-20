import { IPhoto } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs/promises';

interface IFavoritePhotosState {
	favoritePhotos: IPhoto[];
}

const initialState: IFavoritePhotosState = {
	favoritePhotos: [],
};

export const favoritePhotosSlice = createSlice({
	name: 'favoritePhoto',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<IPhoto>) {
			if (!state.favoritePhotos.find((photo) => photo.id == action.payload.id)) state.favoritePhotos.push(action.payload);
		},

		removeFromFavorites(state, action: PayloadAction<string>) {
			state.favoritePhotos = state.favoritePhotos.filter((photo) => photo.id != action.payload);
		},
		toogleFavorites(state, action: PayloadAction<IPhoto>) {
			if (!state.favoritePhotos.find((photo) => photo.id == action.payload.id)) {
				state.favoritePhotos.push(action.payload);
			} else {
				state.favoritePhotos = state.favoritePhotos.filter((photo) => photo.id != action.payload.id);
			}
		},
	},
});

export const { addToFavorites, removeFromFavorites, toogleFavorites } = favoritePhotosSlice.actions;
export default favoritePhotosSlice.reducer;
