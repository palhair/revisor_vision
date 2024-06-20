import { getAlbumsByUserId, getUsersAlbums } from '@/services/almbum';
import { TUsersAlbums } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IUsersAlbumsState {
	usersAlbums: TUsersAlbums;
	loadStatus: 'loading' | 'failed' | 'success' | 'noloaded';
}

const initialState: IUsersAlbumsState = {
	usersAlbums: {},
	loadStatus: 'noloaded',
};

export const usersAlbumsSlice = createSlice({
	name: 'usersAlbums',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAlbums.pending, (state) => {
			state.loadStatus = 'loading';
		});

		builder.addCase(fetchAlbums.rejected, (state) => {
			state.loadStatus = 'failed';
		});

		builder.addCase(fetchAlbums.fulfilled, (state, action) => {
			if (action.payload) {
				state.usersAlbums[action.payload.userId] = action.payload.albums;
				state.loadStatus = 'success';
			}
		});
	},
});

export const fetchAlbums = createAsyncThunk('usersAlbums/fetchStatus', async (userId: string) => {
	const albums = await getAlbumsByUserId(userId);
	return { userId, albums };
});

export default usersAlbumsSlice.reducer;
