import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchResult: [],
  isLoading: false,
  isError: false,
}

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    },
    clearSearchResult: (state) => {
      state.list = [];
    },
    setSearchResultLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setSearchResultError: (state, action) => {
        state.isError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase('setSearchResult', (state, action) => {
      state.searchResult =  action.searchRequest;
    })
  },
})

export const { setSearchResult, clearSearchResult, setSearchResultLoading, setSearchResultError } = searchResultSlice.actions;
export default searchResultSlice.reducer;

export const searchResultStatus = state => state.searchResultSlice.searchResult;