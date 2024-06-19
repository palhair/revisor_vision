import { getPhotosByAlbumId } from '@/services/photos';
import { TPhotos } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IPhotosState {
	photos: TPhotos;
	loadStatus: 'loading' | 'failed' | 'success' | 'noloaded';
}

const initialState: IPhotosState = {
	photos: {},
	loadStatus: 'noloaded',
};

export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPhotos.pending, (state) => {
			state.loadStatus = 'loading';
		});

		builder.addCase(fetchPhotos.rejected, (state) => {
			state.loadStatus = 'failed';
		});

		builder.addCase(fetchPhotos.fulfilled, (state, action) => {
			if (action.payload) {
				state.photos[action.payload.albumId] = action.payload.photos;
				state.loadStatus = 'success';
			}
		});
	},
});

export const fetchPhotos = createAsyncThunk('photos/fetchStatus', async (albumId: string) => {
	const photos = await getPhotosByAlbumId(albumId);
	return { albumId, photos };
});

export default photosSlice.reducer;
