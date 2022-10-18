import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'UI',
	initialState: {},
	reducers: {},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
