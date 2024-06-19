import { getUserByID } from '@/services/user';
import { IUser } from '@/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IUserState {
	user: IUser | null;
	loadStatus: 'loading' | 'failed' | 'success' | 'noloaded';
}

const initialState: IUserState = { user: null, loadStatus: 'noloaded' };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserState(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},

		resetUserState(state) {
			if (state.user) {
				state.user = null;
				state.loadStatus = 'noloaded';
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.pending, (state) => {
			state.loadStatus = 'loading';
		});
		builder.addCase(fetchUser.rejected, (state) => {
			state.loadStatus = 'failed';
		});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			if (action.payload) {
				state.user = action.payload;
				state.loadStatus = 'success';
			}
		});
	},
});

export const fetchUser = createAsyncThunk('user/fetchStatus', async (userId: string) => {
	return getUserByID(userId);
});

export const { setUserState, resetUserState } = userSlice.actions;

export default userSlice.reducer;
