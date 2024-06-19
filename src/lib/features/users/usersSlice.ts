import { getUsers } from '@/services/user';
import { IUser } from '@/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IUsersState {
	users: IUser[];
	loadStatus: 'loading' | 'failed' | 'success' | 'noloaded';
}

const initialState: IUsersState = { users: [], loadStatus: 'noloaded' };

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsersState(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload;
		},

		resetUsersState(state) {
			if (state.users) {
				state.users = [];
				state.loadStatus = 'noloaded';
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loadStatus = 'loading';
		});
		builder.addCase(fetchUsers.rejected, (state) => {
			state.loadStatus = 'failed';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			if (action.payload) {
				state.users = action.payload;
				state.loadStatus = 'success';
			}
		});
	},
});

export const fetchUsers = createAsyncThunk('users/fetchStatus', async () => {
	const users = await getUsers();
	return users;
});

export const { setUsersState, resetUsersState } = usersSlice.actions;

export default usersSlice.reducer;
