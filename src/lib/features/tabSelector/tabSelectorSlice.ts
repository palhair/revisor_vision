import { TTabName } from '@/components';
import { RootState } from '@/lib/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TabSelectorState {
	tab: TTabName;
}

const initialState: TabSelectorState = {
	tab: 'catalog',
};

export const tabSelectorSlice = createSlice({
	name: 'tabSelector',
	initialState,
	reducers: {
		setStoreTab: (state, action: PayloadAction<TTabName>) => {
			if (action.payload && state.tab != action.payload) state.tab = action.payload;
		},
	},
});

export const { setStoreTab } = tabSelectorSlice.actions;

export const selectTab = (state: RootState) => state.tab;

export default tabSelectorSlice.reducer;
